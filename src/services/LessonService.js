const url = 'https://wbdv-generic-server.herokuapp.com/api/001420072/modules'
const baseURL = 'https://wbdv-generic-server.herokuapp.com/api/001420072/lessons'

export const findLessonsForModule = (moduleId) =>
    fetch(`${url}/${moduleId}/lessons`)
        .then(lessons => lessons.json())

export const createLesson = (moduleId, lesson) =>
    fetch(`${url}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteLesson = (lessonId) =>
       fetch(`${baseURL}/${lessonId}`, {
            method: "DELETE"
        }).then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${baseURL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export default {
    findLessonsForModule,
    createLessonForModule: createLesson,
    deleteLessonForModule: deleteLesson,
    updateLessonForServer: updateLesson
}