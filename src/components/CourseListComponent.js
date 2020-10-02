import React from 'react';

const courses = [
    {
        _id: '123',
        title: 'CS4550',
        owner: 'me',
        last_modified: 'yesterday'
    },
    {
        _id: '234',
        title: 'CS4300',
        owner: 'me',
        last_modified: 'yesterday'
    },
    {
        _id: '654',
        title: 'CS9273',
        owner: 'me',
        last_modified: 'yesterday'
    }
]

const CourseListComponent = () =>
    <div className="container">
        <h1>CourseEditor </h1>
        <table className="table">
            <thead>
                <tr>
                    <th> Title </th>
                    <th> Owner </th>
                    <th> Last Modified </th>
                </tr>
            </thead>
            <tbody>
                    {
                    courses.map((courses) => {
                           return (<tr>
                                <td>{courses.title}</td>
                                <td>{courses.owner}</td>
                                <td>{courses.last_modified}</td>
                                <button> Delete </button>
                                <button> Edit </button>
                           </tr>)
                    })
                       }
            </tbody>
        </table>
    </div>

export default CourseListComponent