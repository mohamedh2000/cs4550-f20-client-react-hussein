import React from 'react';
import {FIND_WIDGETS_FOR_TOPIC, CREATE_WIDGET,
    DELETE_WIDGET, UPDATE_WIDGET} from '../actions/widgetActions.js'

const initialState = {
    widgets: []
}

const widgetsReducer = (state=initialState, action) => {
    switch(action.type) {
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(widget =>
                    {if(widget.id == action.widgetId) {return action.widget}})
            }
        case CREATE_WIDGET:
            return {
                widgets:[...state.widgets, action.widget]
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => {if(widget.id != action.widgetId) {return widget}})
            }
        default:
            return state
    }
}

export default widgetsReducer