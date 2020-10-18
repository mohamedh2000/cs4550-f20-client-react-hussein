const url = 'https://wbdv-generic-server.herokuapp.com/api/001420072/courses'
const moduleURL = 'https://wbdv-generic-server.herokuapp.com/api/001420072/modules'

export const findModulesForCourse = (courseId) =>
    fetch(`${url}/${courseId}/modules`).then(modules => modules.json())

export const createModule = (courseId, module) =>
    fetch(`${url}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${moduleURL}/${moduleId}`, {
        method: "DELETE"
    }).then(response => response.json())

export const updateModule = (moduleId, newModule) =>
    fetch(`${moduleURL}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export function findModule(id) {
    return fetch(moduleURL + "/" + id).then(response => {
        return response.json();
    })
}

export default {
    findModulesForCourse,
    createModuleForCourse: createModule,
    deleteModuleForCourse: deleteModule,
    updateModuleForCourse: updateModule,
    findModuleById: findModule
}