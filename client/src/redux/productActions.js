import { publicRequest } from "../requestMethods";

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_PRODUCTS_REQUEST});

        try {
            const res = await publicRequest('/products');
            dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: res?.data});
        } catch (error) {
            dispatch({type: FETCH_PRODUCTS_FAILURE, payload: error.message});
        }
    };
}

export const fetchProductsByCategory = (category) => {
    return async (dispatch) => {
        dispatch({type: FETCH_PRODUCTS_REQUEST});

        try {
            const res = await publicRequest(`/products?category=${category}`);
            dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: res?.data});
        } catch (error) {
            dispatch({type: FETCH_PRODUCTS_FAILURE, payload: error.message});
        }
    }
}