import React from 'react';
import ModuleListComponent from "./ModuleListComponent"
import LessonTabsComponent from "./LessonTabsComponent"
import TopicPillComponent from "./TopicPillComponent"
import WidgetListComponent from "./WidgetListComponent"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus}  from '@fortawesome/free-solid-svg-icons'

class CourseEditorComponent extends React.Component {
    state = {
        courseId: ""
    }

    componentDidMount() {
        this.setState({
            courseId: this.props.match.params.courseId
        })
    }

    render() {
        return (
            <div>
                <h1> Hey {this.state.courseId} ! </h1>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <i className=" wbdv-course-editor wbdv-close x-btn fas fa-times"></i>
                        <strong className="wbdv-course-title"> CS 4550- WebDev </strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="lesson navbar-nav wbdv-lesson-tabs">
                            <LessonTabsComponent />
                        </ul>
                    </div>
                </nav>

                <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <ul className="wbdv-module-list list-group">
                                    <ModuleListComponent />
                                </ul>
                            </div>
                            <div className="col-sm-8">
                                <br />
                                <ul className="nav nav-pills wbdv-topic-pill-list">
                                    <TopicPillComponent />
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

export default CourseEditorComponent