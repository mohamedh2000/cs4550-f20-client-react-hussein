import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faSortAlphaDown} from '@fortawesome/free-solid-svg-icons'
import CourseRowComponent from "../components/CourseRowComponent.js"

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
                                        <FontAwesomeIcon
                                            style={{marginLeft:"10px"}}
                                            icon={faSortAlphaDown} />
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