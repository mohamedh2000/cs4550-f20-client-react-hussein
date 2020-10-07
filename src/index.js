import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseManager from './containers/CourseManager.js'
import CourseEditorComponent from './components/CourseEditorComponent.js'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Route exact path="/" component={CourseManager} />
        <Route exact path={`/CourseEdit/:courseId`} component={CourseEditorComponent} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
