
const url = 'https://wbdv-generic-server.herokuapp.com/api/001420072/users'

export function createCourse(course) {
    return fetch(url, {
            method: "POST",
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => { return response.json() }) };


export function findAllCourses() {
        return fetch(url).then((response) => {
            return response.json();
        });
}

export function findCourseById(id) {
    return fetch(url + "/" + id).then(response => {
        return response.json();
    })
}

export function updateCourse(id, course) {
        return fetch(url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => {return response.json()});
}

export function deleteCourse(id) {
    return fetch(url + "/" + id, {
            method: "DELETE"
        }).then(response => {return response.json()});
}

export default {
    createCourse, deleteCourse, findAllCourses, findCourseById, updateCourse
}
