import moduleService from '../services/ModuleService.js'
export const DELETE_MODULE = "DELETE_MODULE"
export const CREATE_MODULE = "CREATE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const FIND_MODULE = "FIND_MODULE"
export const FIND_MODULE_FOR_COURSE = "FIND_MODULES_FOR_COURSE"

export const deleteModule = (dispatch, module) =>
    moduleService.deleteModuleForCourse(module._id).then(() => {
        dispatch({
            type: DELETE_MODULE,
            module
        })
        console.log(module)
    });

export const findModule = (dispatch, id) =>
    moduleService.findModuleById(id).then((data) => {
        dispatch({
            type: FIND_MODULE,
            module: data
        })
    })

export const createModule = (dispatch, course, module) =>
    moduleService.createModuleForCourse(course._id, module).then(actualModule => {
        dispatch({
            type: CREATE_MODULE,
            module: actualModule
        })
    console.log(course)
    })

export const updateModule = (dispatch, module) =>
    dispatch({
        type: UPDATE_MODULE,
        module
    })

export const updateModuleInServer = (dispatch, module) =>
    moduleService.updateModuleForCourse(module._id, module).then(() => {
        dispatch({
            type: UPDATE_MODULE,
            module
        })
    })