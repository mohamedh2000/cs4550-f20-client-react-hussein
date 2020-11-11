import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const TopicPillComponent = ({courseId, moduleId, lessonId, topics = [], createFunction, deleteFunction,
    updateFunction, updateTopicInServer}) =>
            <div className="nav nav-pills wbdv-topic-pill-list">
            {
                topics.map((topic) =>
                    <li className="btn nav-item wbdv-topic-pill">
                    {console.log("TOPIC")}
                    {console.log(topic)}
                        {
                            (topic.editing ?
                            <div>
                                <input onChange={(event) =>
                                updateFunction({...topic, title: event.target.value})}
                                value={topic.title}/>
                                <button onClick={() => updateTopicInServer({...topic, editing:false})}>
                                    Ok
                                </button>
                            </div>
                            :
                            <div>
                                <Link to={`/CourseEdit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}> {topic.title} </Link>
                                <button onClick={() => updateFunction({...topic, editing: true})}>
                                    Edit
                                </button>
                                <button onClick={() => deleteFunction(topic)}>
                                Delete
                                </button>
                            </div>
                            )
                        }
                    </li>)
            }
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link" href="#">
                        <FontAwesomeIcon onClick={() => createFunction(lessonId)} icon={faPlus}/>
                    </a>
                </li>
            </div>


export default TopicPillComponent