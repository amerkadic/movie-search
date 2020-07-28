import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './authType';

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    axios
        .get('/api/auth/user', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch({
                type: AUTH_ERROR
            });
        });
};
export const register = (name, email, password) => (
    dispatch
) => {
    const body = ({ name, email, password });
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios
        .post('/api/auth/register', body)
        .then(res =>
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL
            });
        });
};

export const login = (email, password) => (
    dispatch
) => {
    const body = ({ email, password });
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios
        .post('api/auth/login', body)
        .then(res =>
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};
export const tokenConfig = (getState) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
};