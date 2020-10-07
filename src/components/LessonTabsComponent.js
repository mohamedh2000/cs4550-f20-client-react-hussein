import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus }  from '@fortawesome/free-solid-svg-icons'

class LessonTabsComponent extends React.Component {

    render() {
        return (
            <div className="lesson navbar-nav wbdv-lesson-tabs">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        Build
                        <span class="sr-only">
                            (current)
                        </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Theme</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Store</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Apps</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Settings</a>
                </li>
                <li class="nav-item">
                    <button class="btn-plus-css wbdv-lesson-add-btn">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </li>
            </div>
        )

    }


}

export default LessonTabsComponent