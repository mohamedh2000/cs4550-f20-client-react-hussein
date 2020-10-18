import lessonService from '../services/LessonService.js'
export const DELETE_LESSON = "DELETE_LESSON"
export const CREATE_LESSON = "CREATE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const FIND_LESSON_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"

export const deleteLesson = (dispatch, lesson) =>
    lessonService.deleteLessonForModule(lesson._id).then(() => {
        dispatch({
            type: DELETE_LESSON,
            lesson
        })
    });

export const createLesson = (dispatch, moduleId, lesson) => {
    lessonService.createLessonForModule(moduleId, lesson).then(actualLesson => {
        dispatch({
            type: CREATE_LESSON,
            lesson: actualLesson
        })
    })
}

export const updateLesson = (dispatch, lesson) =>
    dispatch({
        type: UPDATE_LESSON,
        lesson
    })

export const updateLessonInServer = (dispatch, lesson) =>
    lessonService.updateLessonForServer(lesson._id, lesson).then(() => {
        dispatch({
            type: UPDATE_LESSON,
            lesson
        })
    })