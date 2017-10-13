import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_DETAIL_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, ...INITIAL_STATE, product: action.payload.data };
        case FETCH_PRODUCT_DETAIL_SUCCESS:
            return { ...state, ...INITIAL_STATE, product: action.payload.data };
        default:
            return state;
    }
};
