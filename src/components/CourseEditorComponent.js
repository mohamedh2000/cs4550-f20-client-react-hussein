import React from 'react';
import WidgetListComponent from "./WidgetListComponent"
import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import {createStore, combineReducers} from "redux";
import moduleReducer from '../reducers/modulesReducer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes}  from '@fortawesome/free-solid-svg-icons'
import ModuleListContainer from '../containers/ModuleContainer.js'
import LessonsContainer from '../containers/LessonsContainer.js'
import TopicPillContainer from "../containers/TopicsContainer"
import courseReducer from "../reducers/courseReducer.js"
import {findModulesForCourse} from '../services/ModuleService.js'
import {findCourseById} from '../services/CourseService.js'
import {findLessonsForModule} from '../services/LessonService.js'
import { findTopicsForLesson } from '../services/TopicService.js'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class CourseEditorComponent extends React.Component {
    state = {
        courseId: "",
        course:{}
    }

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if (lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        this.setState({
            courseId: this.props.match.params.courseId
        })
        this.props.findModulesForCourse(courseId);
        this.props.findCourseById(courseId).then(courses => {
            this.setState({
                course: courses.course
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const prevModuleId = prevProps.match.params.moduleId
        const prevLessonId = prevProps.match.params.lessonId
        if (moduleId != prevModuleId) {
            this.props.findLessonsForModule(moduleId).then(lessonss => {
                this.setState({
                    lessons: lessonss.lessons
                })
            })
        }
        if (lessonId != prevLessonId) {
            console.log("IM IN HERE")
            this.props.findTopicsForLesson(lessonId).then(topicss => {
                this.setState({
                    topics: topicss.topics
                })
            })
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand" href="#">
                        <i className=" wbdv-course-editor wbdv-close x-btn fas fa-times"></i>
                        <Link to={`/`} >  <FontAwesomeIcon icon={faTimes} /> </Link>
                        <strong className="wbdv-course-title"> CS 4550 - WebDev Class:{this.state.course.title}</strong>
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <LessonsContainer />
                    </div>
                </nav>

                <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                    <ModuleListContainer />
                            </div>
                            <div className="col-sm-8">
                                <br />
                                <ul className="nav nav-pills wbdv-topic-pill-list">
                                    <TopicPillContainer />
                                </ul>
                                <br/>
                                <WidgetListComponent />
                                <button className="plus-btn btn btn-danger wbdv-lesson-add-btn">
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({})
const propertyToDispatchMapper = (dispatch) => ({
    findTopicsForLesson: lessonId => findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: "FIND_TOPICS_FOR_LESSON",
            topics,
            lessonId
        })),
    findLessonsForModule: moduleId => findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: "FIND_LESSONS_FOR_MODULE",
            lessons,
            moduleId
        })),
    findModulesForCourse: courseId => findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type:"FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findCourseById: courseId => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type:"FIND_COURSE_BY_ID",
            course: actualCourse
        }))
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(CourseEditorComponent)