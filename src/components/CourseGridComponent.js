import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faListUl, faFolder, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import CourseCardComponent from "./CourseCardComponent.js"

class CourseGridComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <div>
                    <strong style={{float:"left"}}> Recent Documents</strong>
                    <strong style={{marginLeft:"200px"}}>
                        Owned By Me <FontAwesomeIcon icon={faCaretDown} />
                    </strong>
                    <div style={{float:"right"}}>
                        <button className="btn" onClick={() => this.props.switchView()}>
                            <FontAwesomeIcon icon={faListUl} />
                        </button>
                        <button className="btn">
                            <FontAwesomeIcon icon={faSortAlphaDown} />
                        </button>
                        <button className="btn">
                            <FontAwesomeIcon icon={faFolder} />
                        </button>
                    </div>
                </div>
                <div className="container">
                    {
                        this.props.courses.map((course) =>
                            <CourseCardComponent
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                course={course} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default CourseGridComponent;