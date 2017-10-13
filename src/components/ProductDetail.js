import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions'

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(this.state, 'this is the state');
    return (
      <div className="App">

      </div>
    );
  }
}


export default ProductDetail;
