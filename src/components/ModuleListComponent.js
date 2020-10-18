import React from 'react';
import {Link} from 'react-router-dom'

const ModuleListComponent = ({course, modules = [], deleteFunction, createFunction, updateFunction, updateServerFunction}) =>
        <ul className="wbdv-module-list list-group">
        {
            modules.map(module =>
            <li>
            <button onClick={() => deleteFunction(module)}> Delete </button>
            {
                (module.editing ?
                    <div>
                        <input onChange={(event) =>
                        updateFunction({...module, title: event.target.value})}
                        value={module.title}/>
                        <button onClick={() => updateServerFunction({...module, editing:false})}>
                            Ok
                        </button>
                    </div>
                : <span>
                    <button onClick={() => updateFunction({...module, editing: true})}>
                        Edit
                    </button>
                    <Link to={`/CourseEdit/${course._id}/modules/${module._id}`}>
                        {module.title}
                    </Link>
                  </span>)
            }
            </li>
            )
        }
        <button onClick={() => createFunction(course, {})}>
            Create Module
        </button>
        </ul>

export default ModuleListComponent;