import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUserEdit, faFileWord, faCheck } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { Link } from 'react-router-dom'

class CourseRowComponent extends React.Component {
    state = {
        editing: false
    }

    render() {
       return (
                <tr>
                    {
                        (this.state.editing ?
                            <input id="updateTitle" style={{width:"300px"}} className="form-control fields"/>
                        : <td id="changeTitle">
                            <Link to={`/CourseEdit/${this.props.course._id}`}>
                                <FontAwesomeIcon icon={faFileWord}/>
                                {this.props.course.title}
                            </Link>
                        </td>
                        )
                    }
                    <td>{this.props.course.owner}</td>
                    <td>{this.props.course.last_modified}</td>
                    <td id="to_replace">
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


                    </td>
                </tr>
            )
       }
}

export default CourseRowComponent;