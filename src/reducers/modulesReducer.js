import React from 'react';
import {DELETE_MODULE, UPDATE_MODULE, CREATE_MODULE, FIND_MODULE_FOR_COURSE} from '../actions/moduleActions.js'

const initialState = {
    modules: []
}

const moduleReducer = (state=initialState, action) => {
    switch(action.type) {
        case FIND_MODULE_FOR_COURSE:
            return {
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                modules: [...state.modules, action.module]
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id != action.module._id)
            }
            alert("delete " + action.module.title)
        case UPDATE_MODULE:
            return {
                modules: state.modules.map((module) => module._id === action.module._id ? action.module : module)
            }
        default:
            return state
    }
}

export default moduleReducer