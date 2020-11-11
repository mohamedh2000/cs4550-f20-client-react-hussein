import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faArrowUp, faArrowDown,
    faTimes, faPlus} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

class HeadingWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            paragraph_text:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleWidgetChange = this.handleWidgetChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            paragraph_text: e.target.value
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
                                    <h3 className="heading"> Paragraph Widget </h3>
                                    <a onClick={() => this.props.updateWidget(this.props.widget.id,
                                                            {...this.props.widget,
                                                                widgetOrder:
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
                                            {...this.props.widget,
                                            widgetOrder: this.props.widget.widgetOrder + 1})}>
                                        <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                        <div style={{marginLeft:"20px", marginRight:"20px"}}
                                            className=" btn-arr form-group row">
                                            <div className="col-sm-19">
                                                <select className="wbdv-field wbdv-role form-control" onChange={this.handleWidgetChange}>
                                                    <option value="PARAGRAPH">Paragraph</option>
                                                    <option value="HEADING">Heading</option>
                                                    <option value="LIST">List</option>
                                                    <option value="IMAGE">Image</option>
                                                </select>
                                            </div>
                                        </div>
                                    <button style={{marginBottom:"10px"}}
                                        className="btn-arr btn btn-danger wbdv-close"
                                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <input className="form-control paragraph_text" onChange={this.handleInputChange} placeholder="Paragraph Text"/>
                                <br/>
                                <input className="form-control" value={this.props.widget.name} placeholder="Widget Name"/>
                                <br />
                                <h5>Preview</h5>
                                <br/>
                                <h5>{this.state.paragraph_text}</h5>
                            </div>
                            </div>
                            )
                            }

}
export default HeadingWidget