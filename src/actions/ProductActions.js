import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS} from './types';
import axios from 'axios'

const fetchProductSuccess = (dispatch, product) => {
  dispatch({
    type: FETCH_PRODUCTS_SUCCESS,
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
