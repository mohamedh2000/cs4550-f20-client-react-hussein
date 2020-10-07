import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faFileWord,
    faTrash, faUserEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { Link } from 'react-router-dom'


class CourseCardComponent extends React.Component {
    state = {
        editing: false
    }

    render() {
        return (
        <div className=" col-sm-2 col-md-3 col-lg-4 col-xl-6">
            <div className="card " style={{margin:"20px", width: "18rem"}}>
              <img class="card-img-top"
                   src="https://i.pinimg.com/736x/2f/20/96/2f209625fa1dccfe67de62ee3fd6ac94--graphic-design-posters-graphic-art.jpg"
                   alt="Card image cap"/>
              <div className="card-body">
                    {(this.state.editing ?
                        <input id="updateTitle" className="form-control"/>
                        :
                        <Link to={`/CourseEdit/${this.props.course._id}`}>
                            <h5 className="card-title">{this.props.course.title}</h5>
                        </Link>
                    )}
              </div>
              <div class="card-footer bg-transparent border-success">
                <FontAwesomeIcon style={{marginRight:"5px"}} icon={faFileWord} />
                Modified {this.props.course.last_modified}
                {
                    (!this.state.editing ?
                        <button id="deleteBtn" className="btn"
                            onClick={() => this.props.deleteCourse(this.props.course)}>
                             <FontAwesomeIcon icon={faTrash} />
                            </button> : console.log("editing!"))
                }
                {
                    (!this.state.editing ? <button id="editBtn" className="btn"
                    onClick={() => this.setState({ editing: true })}>
                    <FontAwesomeIcon icon={faUserEdit} />
                    </button> : console.log("editing!"))
                }
                {
                    ( this.state.editing ?
                        <button id="checkBtn" className="btn"
                            onClick={() => {
                                this.props.updateCourse(this.props.course,
                                    $("#updateTitle").val());
                                    this.setState({
                                        editing: false
                                    });
                            }}>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        : console.log("not editing")
                    )
                }
                <button style={{float:"right"}} class="btn" onClick={
                    <a href="#" title="Header" data-toggle="popover"
                        data-placement="bottom" data-content="Content">Click</a>
                }>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </button>
              </div>
            </div>
        </div>
        )
    }



}

export default CourseCardComponent;