import React from 'react';
import {connect} from 'react-redux'
import LessonTabsComponent from '../components/LessonTabsComponent.js'
import {DELETE_LESSON, UPDATE_LESSON, CREATE_LESSON,
    createLesson, deleteLesson, updateLesson, updateLessonInServer
    } from '../actions/lessonActions.js'

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    module: state.lessonReducer.moduleId,
    course: state.lessonReducer.courseId
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteFunction: (lesson) => deleteLesson(dispatch, lesson),
    createFunction: (module) => createLesson(dispatch, module, {'title':"New Lesson"}),
    updateFunction: (lesson) => updateLesson(dispatch, lesson),
    updateLessonInServer: (lesson) => updateLessonInServer(dispatch, lesson)
})

export default connect(stateToPropertyMapper,
    propertyToDispatchMapper)(LessonTabsComponent)