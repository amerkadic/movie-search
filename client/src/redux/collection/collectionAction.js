import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './collectionType';
import { tokenConfig } from '../auth/authAction';

export const getCollection = () => (dispatch, getState) => {
    axios
        .get('api/collection', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        );
};

export const addItem = (name, poster) => (dispatch, getState) => {
    const body = JSON.stringify({ name, poster });
    axios
        .post('add', body, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        );
};

export const deleteItem = (id) => (dispatch, getState) => {
    axios
        .delete(`api/collection/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};