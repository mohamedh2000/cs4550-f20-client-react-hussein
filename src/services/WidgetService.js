const topicsUrl = "http://localhost:8080/api/topics"
const widgetURL = "http://localhost:8080/api/widgets"

export const findWidgetsForTopic = (topicId) =>
    fetch(`${topicsUrl}/${topicId}/widgets`)
        .then(widgets => {return widgets.json()})

export const createWidget = (topicId) => {
        return fetch(`${topicsUrl}/${topicId}/widgets`, {
            method:'POST',
            body:JSON.stringify({name:"NEW_WIDGET", type: "PARAGRAPH", topicId:topicId}),
            headers: {
                "content-type": "application/json"
            }
        }).then(widget => {return widget.json()})
    }

export const deleteWidget = (widgetId) => {
    return fetch(`${widgetURL}/${widgetId}`, {
        method:'DELETE',
        headers:{
            "content-type":"application/json"
        }
    }).then(() => {console.log("deleted")})
}

export const updateWidget = (widgetId, widget) => {
    return fetch(`${widgetURL}/${widgetId}`, {
        method:'PUT',
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then (response => {return response.json()})
}

export default {
    findWidgetsForTopic,
    createWidget,
    deleteWidget,
    updateWidget
}