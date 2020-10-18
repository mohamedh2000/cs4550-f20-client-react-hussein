import React from 'react';
import {DELETE_LESSON, UPDATE_LESSON, CREATE_LESSON, FIND_LESSON_FOR_MODULE} from '../actions/lessonActions.js'

const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch(action.type) {
        case FIND_LESSON_FOR_MODULE:
            return{
                ...state,
                lessons: action.lessons,
                moduleId: action.moduleId,
                courseId: action.courseId
            }
        case CREATE_LESSON:
            return {
                lessons: [...state.lessons, action.lesson]
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id != action.lesson._id)
            }
        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map((lesson) =>
                    lesson._id === action.lesson._id ?
                        action.lesson : lesson)
            }
        default:
            return state
    }
}

export default lessonReducer