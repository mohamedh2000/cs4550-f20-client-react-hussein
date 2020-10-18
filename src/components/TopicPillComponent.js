import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

const TopicPillComponent = ({lessonId, topics = [], createFunction, deleteFunction,
    updateFunction, updateTopicInServer}) =>
            <div className="nav nav-pills wbdv-topic-pill-list">
            {
                topics.map((topic) =>
                    <li className="btn nav-item wbdv-topic-pill">
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
                                {topic.title}
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