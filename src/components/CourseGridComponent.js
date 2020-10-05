import React from 'react';
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faSortAlphaDown} from '@fortawesome/free-solid-svg-icons'
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

            <div className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
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