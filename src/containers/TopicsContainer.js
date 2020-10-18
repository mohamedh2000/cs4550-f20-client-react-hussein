import React from 'react';
import {connect} from 'react-redux'
import TopicPillComponent from '../components/TopicPillComponent.js'
import {DELETE_TOPIC, UPDATE_TOPIC, CREATE_TOPIC,
    createTopic, deleteTopic, updateTopic, updateTopicInServer
    } from '../actions/topicActions.js'

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteFunction: (topic) => deleteTopic(dispatch, topic),
    createFunction: (lessonId, topic) => createTopic(dispatch, lessonId, {'title':"New Topic"}),
    updateFunction: (topic) => updateTopic(dispatch, topic),
    updateTopicInServer: (topic) => updateTopicInServer(dispatch, topic)
})

export default connect(stateToPropertyMapper,
    propertyToDispatchMapper)(TopicPillComponent)