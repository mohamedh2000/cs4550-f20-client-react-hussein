import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faArrowUp, faArrowDown,
    faTimes, faPlus} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

class HeadingWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            headingText: '',
            headingType: 'Heading1'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleWidgetChange = this.handleWidgetChange.bind(this);
        this.GetText = this.GetText.bind(this);
    }

        handleInputChange(e) {
            this.setState({
                headingText: e.target.value
            })
        }

        handleTypeChange(e) {
            this.setState({
                headingType: e.target.value
            })
        }

        handleWidgetChange(e) {
            this.props.updateWidget(this.props.widget.id,
                {...this.props.widget, type:e.target.value})
        }

        GetText() {
            switch (this.state.headingType) {
                case 'Heading1':
                    return <h1> {this.state.headingText} </h1>
                    break;
                case 'Heading2':
                    return <h2> {this.state.headingText} </h2>
                    break;
                case 'Heading3':
                    return <h3> {this.state.headingText} </h3>
                    break;
                case 'Heading4':
                    return <h4> {this.state.headingText} </h4>
                    break;
                case 'Heading5':
                    return <h5> {this.state.headingText} </h5>
                    break;
                case 'Heading6':
                    return <h6> {this.state.headingText} </h6>
                    break;
                default:
                    return <h1> {this.state.headingText} </h1>
                    break;
            }
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
                            <div id="middle-class" className="container"
                                style={{marginTop:"30px"}}>
                                <div className="row float-right">
                                    <h3 className="heading"> Heading Widget </h3>
                                    <a onClick={() => this.props.updateWidget(this.props.widget.id,
                                                            {...this.props.widget,
                                                                widgetOrder: this.props.widget.widgetOrder - 1})}
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
                                                <select className="wbdv-field wbdv-role form-control"
                                                    onChange={this.handleWidgetChange}>
                                                    <option value="HEADING">Heading</option>
                                                    <option value="PARAGRAPH">Paragraph</option>
                                                    <option value="LIST">List</option>
                                                    <option value="IMAGE">Image</option>
                                                </select>
                                            </div>
                                        </div>
                                    <button style={{marginBottom:"10px"}}
                                        className="btn-arr btn btn-danger wbdv-close" onClick={() =>
                                            this.props.deleteWidget(this.props.widget.id)}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <input className="form-control wbdv-course-title"
                                    placeholder="Heading Text" onChange={this.handleInputChange}/>
                                <br/>
                                <div className="form-group">
                                    <div>
                                        <select className="form-control"
                                            onChange={this.handleTypeChange}>
                                            <option value="Heading1">Heading1</option>
                                            <option value="Heading2">Heading2</option>
                                            <option value="Heading3">Heading3</option>
                                            <option value="Heading4">Heading4</option>
                                            <option value="Heading5">Heading5</option>
                                            <option value="Heading6">Heading6</option>
                                        </select>
                                    </div>
                                </div>
                                <input className="form-control" value={this.props.widget.name}/>
                                <br />
                                <h5>Preview</h5>
                                <br/>
                                {
                                    this.GetText()
                                }
                            </div>
                    </div>
                )
            }
    }
export default HeadingWidget;