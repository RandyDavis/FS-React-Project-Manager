import axios from 'axios';
import {
    GET_ERRORS,
    CREATE_PROJECT,
    GET_PROJECT,
    GET_PROJECTS,
    PROJECT_LOADING
} from './types';


// Create Project
export const createProject = (projectData, history) => dispatch => {
    axios.post('/api/projects/new', projectData)
        .then(res =>
            dispatch({
                type: CREATE_PROJECT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

// Get Projects
export const getProjects = () => dispatch => {
    dispatch(projectsLoading());
    axios.get('/api/projects/all')
        .then(res =>
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROJECTS,
                payload: null
            })
        )
};


// Project or Projects Loading
export const projectsLoading = () => {
    return {
        type: PROJECT_LOADING
    };
};


// Delete Project
