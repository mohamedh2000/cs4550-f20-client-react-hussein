import React from 'react';

class CourseEditorComponent extends React.Component {
    state = {
        courseId: ""
    }

    componentDidMount() {
        this.setState({
            courseId: this.props.match.params.courseId
        })
    }

    render() {
        return (
            <div>
                <h1> Hey {this.state.courseId} ! </h1>
            </div>
        )
    }

}

export default CourseEditorComponent