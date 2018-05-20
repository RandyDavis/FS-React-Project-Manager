import {
    CREATE_PROJECT,
    GET_PROJECT,
    GET_PROJECTS,
    PROJECT_LOADING
} from '../actions/types';

const initialState = {
    project: null,
    projects: [],
    loading: false
}

export default function(state= initialState, action) {
    switch (action.type) {
        case PROJECT_LOADING:
            return {
                ...state,
                loading: true
            }

        case CREATE_PROJECT:
            return {
                ...state,
                projects: [action.payload, ...state.projects]
            }

        case GET_PROJECT:
            return {
                ...state,
                project: action.payload,
                loading: false
            }

        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            }

        default:
            return state;
    }
}