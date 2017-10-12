import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions'

class InnerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <p>hello</p>
      </div>
    );
  }
}


export default InnerPage;
