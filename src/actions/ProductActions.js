import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_DETAILS, FETCH_PRODUCT_DETAIL_SUCCESS} from './types';
import axios from 'axios'

const fetchProductSuccess = (dispatch, product) => {
  dispatch({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: product
  });
};

const fetchProductDetailSuccess = (dispatch, product) => {
  dispatch({
    type: FETCH_PRODUCT_DETAIL_SUCCESS,
    payload: product
  });
};

export const fetchProducts = ( gender ) => {
    return (dispatch) => {
      dispatch({type: FETCH_PRODUCTS});

      axios.get(`/data/v1/US/enhance-category/c/${gender}_feature/newarrivals`)
        .then((product) => fetchProductSuccess(dispatch, product))
        .catch((err) => console.error(err));
    }
};

export const fetchProductDetails = ( productCode ) => {
  return (dispatch) => {
    dispatch({type: FETCH_PRODUCT_DETAILS});

    axios.get(`/data/v1/US/products/${productCode}`)
      .then((product) => fetchProductDetailSuccess(dispatch, product))
      .catch((err) => console.error(err));
  }
};
