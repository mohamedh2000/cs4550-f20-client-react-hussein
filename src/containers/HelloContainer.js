import React from 'react';
import HelloComponent from '../components/HelloComponent.js'
import {connect} from 'react-redux';

const stateToPropertyMapper = (state) => ({
    message: state.fsm.msg,
    todos: state.fsm.todos
})

export default connect(stateToPropertyMapper)(HelloComponent);