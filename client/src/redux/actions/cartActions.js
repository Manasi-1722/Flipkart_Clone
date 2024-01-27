
import axios from 'axios';   // used to call API
import * as actionType from '../constants/cartConstant';


const PORT = '';

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${PORT}/products/${id}`);

        dispatch({ type:actionType.ADD_TO_CART, payload: { ...data, quantity }});
    } catch (error) {
        dispatch({ type:actionType.ADD_TO_CART_ERROR, payload: error.message });
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch ({ type : actionType.REMOVE_FROM_CART, payload: id });

};