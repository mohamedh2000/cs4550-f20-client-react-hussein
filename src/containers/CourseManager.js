import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit} from '@fortawesome/free-solid-svg-icons'
import { faTh} from '@fortawesome/free-solid-svg-icons'
import { faSortAlphaDown} from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import courseService from "../services/CourseService.js"
import CourseRowComponent from "../components/CourseRowComponent.js"
import CourseGridComponent from "../components/CourseGridComponent.js"
import CourseTableComponent from "../components/CourseTableComponent.js"
import {Router} from 'react-router-dom'

class CourseManager extends React.Component {
    constructor(props) {
        super();
        this.state = {
            courses: [],
            grid: false
        }
        this.createCourse = this.createCourse.bind(this)
        this.findAllCourses = this.findAllCourses.bind(this)
        this.deleteCourse = this.deleteCourse.bind(this)
        this.updateCourse = this.updateCourse.bind(this)
        this.switchView = this.switchView.bind(this)
    }

    componentDidMount() {
        this.findAllCourses()
    }

    findAllCourses = () => {
        courseService.findAllCourses().then(data => {
            this.setState({
                courses: data
            })
        })
    }

    createCourse = (course) => {
        courseService.createCourse(course).then(data => {
            this.setState((prevState) => ({
                courses: [...prevState.courses, data]
            }))
        })
    }

    deleteCourse = (course) => {
        const course_id = course._id
        courseService.deleteCourse(course_id).then(data => {console.log(data)})
        const newCourses = this.state.courses.filter(course => course._id !== course_id)
        this.setState({
            courses: newCourses
        })
    }

    updateCourse = (course, updatedValue) => {
            let courses_ = this.state.courses
            console.log(updatedValue)
            const id = course._id;
            course.title = updatedValue;
            courseService.updateCourse(id, course).then(data => {
                for (let i = 0; i < courses_.length; i++) {
                    if( courses_[i]._id === id) {
                        courses_[i].title = updatedValue;
                        break;
                    }
                }
                this.setState({
                    courses: courses_
                })
            })
    }

    switchView = () => {
        this.setState((prevState) => ({
            grid : !prevState.grid
        }))
    }

    render() {
        return (
            <div className="container">
                <div className="container" style={{display: "inline"}}>
                    <button className="btn"> <FontAwesomeIcon
                        style={{width:"30px", height:"30px"}} icon={faBars}/> </button>
                    <label for="course_input_name"> <b style={{fontSize:"30px"}}> CourseEditor </b> </label>
                    <input id="course_input_name" style={{marginLeft: "50px", marginRight: "50px",
                        display:"inline-block", width:"300px"}} className="form-control fields"
                        placeholder="New Course"/>
                    <button className="btn fields"
                        onClick={() => this.createCourse({
                            title : $("#course_input_name").val(),
                            owner: 'Me',
                            last_modified: new Date(1900 + new Date().getYear(),
                                new Date().getMonth(),new Date().getDate()).toUTCString()
                            })
                    }>
                        <h1> <FontAwesomeIcon icon={faPlusSquare} /> </h1>
                    </button>
                </div>

                {
                    (!this.state.grid ?
                        <CourseTableComponent switchView={this.switchView} updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                            :
                        <CourseGridComponent switchView={this.switchView} updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                    )
                }
            </div>
        )
    }
}



export default CourseManager;