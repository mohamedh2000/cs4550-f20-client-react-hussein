import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseManager from './containers/CourseManager.js'
import CourseEditorComponent from './components/CourseEditorComponent.js'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import HelloContainer from './containers/HelloContainer.js'
import {createStore, combineReducers} from "redux";
import moduleReducer from "./reducers/modulesReducer.js"
import courseReducer from "./reducers/courseReducer.js"
import lessonReducer from "./reducers/lessonsReducer.js"
import topicReducer from "./reducers/topicsReducer.js"
import {Provider} from 'react-redux'

const rootReducer = combineReducers({
    moduleReducer,
    courseReducer,
    lessonReducer,
    topicReducer
})
//start: //serve -s build

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
        <Route exact path="/" component={CourseManager} />
        <Route exact path={[`/CourseEdit/:courseId`,
            `/CourseEdit/:courseId/modules/:moduleId`,
            `/CourseEdit/:courseId/modules/:moduleId/lessons/:lessonId`]}
            component={CourseEditorComponent} />
        <Route exact path="/table" component={CourseManager} />
        <Route exact path="/grid" component={CourseManager} />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
