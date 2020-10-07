import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

class TopicPillComponent extends React.Component {

    render() {
        return (
            <div className="nav nav-pills wbdv-topic-pill-list">
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link active" href="#"> Topic 1 </a>
                </li>
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link" href="#"> Topic 2 </a>
                </li>
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link" href="#"> Topic 3 </a>
                </li>
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link" href="#"> Topic 4 </a>
                </li>
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link" href="#">
                        <FontAwesomeIcon icon={faPlus}/>
                    </a>
                </li>
            </div>
        )
    }

}

export default TopicPillComponent