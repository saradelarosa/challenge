import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions'
import NewArrivals from './NewArrivals'

class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'womens'
    }
  }

  componentWillMount() {
    this.props.fetchProducts(this.state.gender);
  }

  shouldComponentUpdate(nextProps, nextState) {
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
      // perform any preparations for an upcoming update
      console.log(nextProps, "props++++++state", nextState);

  }

  render() {
    return (
      <div className="App">
        <NewArrivals />
      </div>
    );
  }
}

const mapStateToProps = ({product}) => {
  return {
    product: product.product
  }
}

export default connect(mapStateToProps, { fetchProducts })(Women);
