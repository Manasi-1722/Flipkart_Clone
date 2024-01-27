import * as actionTypes from '../constants/productConstant';
import axios from 'axios';
const PORT = ``;
export const getProducts = () => async (dispatch) => {
    try {
        
        const { data } = await axios.get(`${PORT}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: error.message });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${PORT}/products/${id}`);
        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};


// export const removeProductDetails = () => (dispatch) => {
    
//     dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

// };