import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faArrowUp, faArrowDown,
    faTimes, faPlus} from '@fortawesome/free-solid-svg-icons'
import HeadingWidget from './HeadingWidget.js'
import ParagraphWidget from './paragraphWidget.js'
import ListWidget from './ListWidget.js'
import ImageWidget from './ImageWidget.js'

const WidgetListComponent = ({ widgets=[], topicId, createWidget, deleteWidget, updateWidget }) =>
        <ul className="container">
                {
                    widgets.map(widget =>
                        <li>
                            {(widget.type === "PARAGRAPH" ?
                                <ParagraphWidget widget={widget} deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}/>
                            :
                                (widget.type === "HEADING" ? <HeadingWidget widget={widget} deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}/>
                                    :
                                    (widget.type === "LIST" ?
                                        <ListWidget widget={widget} deleteWidget={deleteWidget} updateWidget={updateWidget}/>
                                        :
                                        <ImageWidget widget={widget} deleteWidget={deleteWidget} updateWidget={updateWidget}/>
                                    )
                                )
                            )}
                        </li>
                    )
                }
                <button onClick={() => createWidget(topicId)}>
                    Create Widget
                </button>
        </ul>

export default WidgetListComponent