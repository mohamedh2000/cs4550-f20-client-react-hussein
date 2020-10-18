const url = 'https://wbdv-generic-server.herokuapp.com/api/001420072/lessons'
const baseURL = 'https://wbdv-generic-server.herokuapp.com/api/001420072/topics'

export const findTopicsForLesson = (lessonId) =>
    fetch(`${url}/${lessonId}/topics`)
        .then(topics => topics.json())

export const createTopic = (lessonId, topic) =>
        fetch(`${url}/${lessonId}/topics`, {
            method: "POST",
            body: JSON.stringify(topic),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => {
            console.log(lessonId);
            console.log("completed!");
        response.json()})

export const deleteTopic = (topicId) =>
       fetch(`${baseURL}/${topicId}`, {
            method: "DELETE"
        }).then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`${baseURL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export default {
    findTopicsForLesson,
    createTopic,
    deleteTopic,
    updateTopic
}