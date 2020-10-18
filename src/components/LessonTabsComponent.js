import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus }  from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const LessonTabsComponent = ({module, course, lessons = [], createFunction, deleteFunction, updateFunction, updateLessonInServer}) =>
    <ul className="lesson navbar-nav wbdv-lesson-tabs" >
        {
            lessons.map(lesson =>
                <li class="nav-item" style={{marginRight:"30px"}}>
                {
                    (
                        lesson.editing ?
                        <div>
                            <input onChange={(event) =>
                                updateFunction({...lesson, title: event.target.value})}
                                value={lesson.title}/>
                                        <button onClick={() => updateLessonInServer({...lesson, editing:false})}>
                                            Ok
                                        </button>
                        </div>
                        :
                        <span>
                            <Link to={`/CourseEdit/${course}/modules/${module}/lessons/${lesson._id}`}>
                                {lesson.title}
                            </Link>
                            <button onClick={() => updateFunction({...lesson, editing: true})}>
                                Edit
                            </button>
                            <button onClick={() => deleteFunction(lesson)}>
                                Delete
                            </button>
                        </span>
                    )
                }
                </li>)
        }
        <button onClick={() => createFunction(module)}>
            Create Lesson
        </button>
    </ul>

export default LessonTabsComponent;
