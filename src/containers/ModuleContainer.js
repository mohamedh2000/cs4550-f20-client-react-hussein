import React from 'react';
import {connect} from 'react-redux'
import ModuleListComponent from '../components/ModuleListComponent.js'
import {deleteModule, createModule, updateModule, updateModuleInServer} from '../actions/moduleActions.js'

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteFunction: (module) => deleteModule(dispatch, module),
    createFunction: (course, module) => createModule(dispatch, course, {'title':"New Module"}),
    updateFunction: (module) => updateModule(dispatch, module),
    updateServerFunction: (module) => updateModuleInServer(dispatch, module)
})

export default connect(stateToPropertyMapper,
    propertyToDispatchMapper)(ModuleListComponent)
