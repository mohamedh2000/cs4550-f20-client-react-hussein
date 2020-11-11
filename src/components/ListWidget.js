import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faArrowUp, faArrowDown,
    faTimes, faPlus} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

class ListWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            ListText: '',
            ListType: 'UnorderedList'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleWidgetChange = this.handleWidgetChange.bind(this);
    }

        handleInputChange(e) {
            this.setState({
                ListText: e.target.value
            })
        }

        handleTypeChange(e) {
            this.setState({
                ListType: e.target.value
            })
        }

        handleWidgetChange(e) {
            this.props.updateWidget(this.props.widget.id, {...this.props.widget, type:e.target.value})
        }

    render() {
        return (
                    <div className="container" style={{border:"solid"}}>
                            <div className="row float-right" style={{marginRight:"5px"}}>
                                <button id="save_btn" style={{marginRight:"10px"}}
                                    className="btn btn-success">Save</button>
                                <h5>Preview <FontAwesomeIcon icon={faToggleOff}/> </h5>
                            </div>
                            <br/>
                            <div id="middle-class" className="container" style={{marginTop:"30px"}}>
                                <div className="row float-right">
                                    <h3 className="heading"> List Widget </h3>
                                    <a onClick={() => this.props.updateWidget(this.props.widget.id,
                                                            {...this.props.widget, widgetOrder:
                                                                this.props.widget.widgetOrder - 1})}
                                        style={{marginRight:"20px", marginLeft:"20px",
                                        marginBottom:"10px"}}
                                        className="btn-arr btn btn-warning">
                                        <FontAwesomeIcon icon={faArrowUp} />
                                    </a>
                                    <a className="btn-arr btn btn-warning"
                                        style={{marginBottom:"10px"}}
                                        onClick={() =>
                                        this.props.updateWidget(this.props.widget.id,
                                            {...this.props.widget, widgetOrder: this.props.widget.widgetOrder + 1})}>
                                        <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                        <div style={{marginLeft:"20px", marginRight:"20px"}}
                                            className=" btn-arr form-group row">
                                            <div className="col-sm-19">
                                                <select className="wbdv-field wbdv-role form-control" onChange={this.handleWidgetChange}>
                                                    <option value="LIST">List</option>
                                                    <option value="HEADING">Heading</option>
                                                    <option value="PARAGRAPH">Paragraph</option>
                                                    <option value="IMAGE">Image</option>
                                                </select>
                                            </div>
                                        </div>
                                    <button style={{marginBottom:"10px"}}
                                        className="btn-arr btn btn-danger wbdv-close"
                                            onClick={() =>
                                                this.props.deleteWidget(this.props.widget.id)}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <textarea type="text" className="form-control"
                                    placeholder="Enter one list item per line"
                                        onChange={this.handleInputChange}/>
                                <br/>
                                <div className="form-group">
                                    <div>
                                        <select className="form-control" onChange={this.handleTypeChange}>
                                            <option value="UnorderedList">Unordered List</option>
                                            <option value="OrderedList">Ordered List</option>
                                        </select>
                                    </div>
                                </div>
                                <input className="form-control" value={this.props.widget.name} placeholder="Widget name"/>
                                <br />
                                <h5>Preview</h5>
                                <br/>
                                {( this.state.ListType == "UnorderedList" ?
                                    <ul>
                                        {
                                            this.state.ListText.split('\n').map(line =>
                                                <li> {line} </li>
                                            )
                                        }
                                    </ul>
                                    :
                                    <ol>
                                        {
                                            this.state.ListText.split('\n').map(line =>
                                                <li> {line} </li>
                                            )
                                        }
                                    </ol>
                                )}
                            </div>
                    </div>
                )
            }
    }
export default ListWidget;