import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faArrowUp, faArrowDown,
    faTimes, faPlus} from '@fortawesome/free-solid-svg-icons'

class WidgetListComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row float-right" style={{marginRight:"5px"}}>
                    <button id="save_btn" style={{marginRight:"10px"}}
                        className="btn btn-success">Save</button>
                    <h5>
                        Preview <FontAwesomeIcon icon={faToggleOff}/>
                    </h5>
                </div>
                <br/>
                <div id="middle-class" className="container" style={{marginTop:"30px"}}>
                    <div className="row float-right">
                        <h3 className="heading" >Heading Widget</h3>
                        <a style={{marginRight:"20px", marginLeft:"20px", marginBottom:"10px"}}
                            className="btn-arr btn btn-warning">
                                <FontAwesomeIcon icon={faArrowUp} />
                        </a>
                        <a className="btn-arr btn btn-warning"style={{marginBottom:"10px"}}>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </a>
                        <div style={{marginLeft:"20px", marginRight:"20px"}}
                            className=" btn-arr form-group row">
                                <div className="col-sm-19">
                                    <select className="wbdv-field wbdv-role form-control">
                                        <option value="Heading">Heading</option>
                                    </select>
                                </div>
                        </div>
                        <a style={{marginBottom:"10px"}}
                            className="btn-arr btn btn-danger wbdv-close">
                                <FontAwesomeIcon icon={faTimes} />
                        </a>
                     </div>
                </div>
                <div>
                    <input className="form-control wbdv-course-title" placeholder="Heading Text"/>
                    <br/>
                    <div className="form-group">
                        <div>
                            <select className=" wbdv-lesson-tabs form-control">
                                <option value="Heading">Heading</option>
                            </select>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Widget name"/>
                    <br />
                    <h5>Preview</h5>
                    <br/>
                    <h1>Heading text</h1>
                </div>
            </div>
        )
    }
}

export default WidgetListComponent