import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import productReducer from './ProductReducer'

export default combineReducers({
  router: routerReducer,
  product: productReducer
})
