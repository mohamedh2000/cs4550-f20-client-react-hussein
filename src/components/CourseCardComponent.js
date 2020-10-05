import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

class CourseCardComponent extends React.Component {

    render() {
        return (
            <div className="card" style={{margin:"20px", width: "18rem"}}>
              <img class="card-img-top"
                   src="https://i.pinimg.com/736x/2f/20/96/2f209625fa1dccfe67de62ee3fd6ac94--graphic-design-posters-graphic-art.jpg"
                   alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{this.props.course.title}</h5>
              </div>
              <div class="card-footer bg-transparent border-success">
                <FontAwesomeIcon style={{marginRight:"5px"}} icon={faFileWord} />
                Modified {this.props.course.last_modified}
                <button style={{float:"right"}} class="btn" onClick={
                    <a href="#" title="Header" data-toggle="popover"
                        data-placement="bottom" data-content="Content">Click</a>
                }>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </button>
              </div>
            </div>
        )
    }



}

export default CourseCardComponent;