import  widgetService from '../services/WidgetService.js'
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"

export const createWidget = (dispatch, topicId) => {
    widgetService.createWidget(topicId).then((actualWidget) => {
            dispatch({
                type: CREATE_WIDGET,
                widget: actualWidget
            })
        })
    }

export const deleteWidget = (dispatch, widgetId) => {
    widgetService.deleteWidget(widgetId).then(() => {
            dispatch({
                type: DELETE_WIDGET,
                widgetId
            })
    })
}

export const updateWidget = (dispatch, widgetId, widget) => {
    widgetService.updateWidget(widgetId, widget).then(updatedWidget => {
        dispatch({
            type: UPDATE_WIDGET,
            widgetId,
            widget
        })
    })
}

export default {
    FIND_WIDGETS_FOR_TOPIC,
    CREATE_WIDGET,
    DELETE_WIDGET,
    UPDATE_WIDGET
}