import axios from 'axios';
import {
    GET_ERRORS,
    CREATE_PROJECT,
    GET_PROJECT,
    GET_PROJECTS,
    PROJECT_LOADING,
    SET_CURRENT_USER
} from './types';

// Get Current Project



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


// Project Loading



// Delete Project
