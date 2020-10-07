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
import {Router} from 'react-router-dom'


class CourseTableComponent extends React.Component {
    render() {
        return (
            <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Title </th>
                                <th> Owner </th>
                                <th> Last Modified </th>
                                <th>
                                    <button className="btn" onClick={() => this.props.switchView()}>
                                        <FontAwesomeIcon icon={faTh} />
                                    </button>
                                    <button className="btn">
                                        <FontAwesomeIcon style={{marginLeft:"10px"}} icon={faSortAlphaDown} />
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.courses.map((course) =>
                                    <CourseRowComponent updateCourse={this.props.updateCourse}
                                    deleteCourse={this.props.deleteCourse} course={course} />)
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default CourseTableComponent;