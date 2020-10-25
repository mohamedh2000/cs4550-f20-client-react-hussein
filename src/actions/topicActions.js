import topicService from '../services/TopicService.js'
export const DELETE_TOPIC = "DELETE_TOPIC"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"

export const deleteTopic = (dispatch, topic) =>
    topicService.deleteTopic(topic._id).then(() => {
        dispatch({
            type: DELETE_TOPIC,
            topic
        })
    });

export const createTopic = (dispatch, lessonId, topic) =>
{
    topicService.createTopic(lessonId, topic).then(actualLesson => {
        dispatch({
            type: CREATE_TOPIC,
            topic
        })
    })
    }

export const updateTopic = (dispatch, topic) =>
    dispatch({
        type: UPDATE_TOPIC,
        topic
    })

export const updateTopicInServer = (dispatch, topic) =>
    topicService.updateTopic(topic._id, topic).then(() => {
        dispatch({
            type: UPDATE_TOPIC,
            topic
        })
    })