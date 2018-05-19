import axios from 'axios';
import {
    GET_ERRORS,
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
    SET_CURRENT_USER
} from './types';

// Get Current Profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile')
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        )
}

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axios.post('/api/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

// Profile Loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}

// Clear Profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}

// Delete Account and Profile
export const deleteAccount = (id) => dispatch => {
    if (window.confirm('Are you sure? This will permanently delete your account and can NOT be undone!')) {
        axios.delete(`/api/profile/${id}`, id)
            .then(res =>
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {} // send empty object to set auth user to nothing
                })
            )
            .catch(err => dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
    }
}