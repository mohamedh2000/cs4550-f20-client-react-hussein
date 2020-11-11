import React from 'react';
import {connect} from 'react-redux'
import WidgetListComponent from '../components/WidgetListComponent.js'
import {FIND_WIDGETS_FOR_TOPIC, createWidget, deleteWidget, updateWidget} from '../actions/widgetActions.js'

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets,
    topicId: state.widgetsReducer.topicId
})

const propertyToDispatchMapper = (dispatch) => ({
    createWidget: (topicId) => createWidget(dispatch, topicId),
    deleteWidget: (widgetId) => deleteWidget(dispatch, widgetId),
    updateWidget: (widgetId, widget) => updateWidget(dispatch, widgetId, widget)
})

export default connect(stateToPropertyMapper,
    propertyToDispatchMapper)(WidgetListComponent)