import React, { Component } from 'react'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import { Thumbnail, Col, Grid, Row, Button } from 'react-bootstrap'
import { fetchProducts } from '../actions'

class NewArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ''
    };
  }

  onItemClick(product, e) {
    console.log(product);
    this.props.history.push('/productDetail')
  }

  _renderObject(){
    let $products = this.props.product;
    if (this.props.product) {
      return Object.entries($products.productList).map(([key, value], i) => {
  			return (
          <Grid>
            <Row>
      				<div key={key}>
                <h2 className="subtitle">{value.header}</h2>
                {
                  value.products.map((product, index) => {

                    const images = `https://i.s-jcrew.com/is/image/jcrew/${product.productCode}_${product.defaultColorCode}`
                    let boundItemClick = this.onItemClick.bind(this, product);
                    return (
                        <Col xs={6} md={4}>
                          <Thumbnail src={images} alt="242x200">
                            <p className="tileText">{product.productDescription}</p>
                            <Button
                            bsStyle="primary"
                            onClick={boundItemClick}>View Product</Button>
                          </Thumbnail>
                        </Col>
                    )
                  })
                }
      				</div>
            </Row>
          </Grid>
        )
  		})
    } else {
      $products = (<div>Loading</div>)
    }
	}

  render() {
    return (
      <div className="App">
        {this._renderObject()}
      </div>
    );
  }
}

const mapStateToProps = ({product}) => {
  return {
    product: product.product
  }
}

export default withRouter(connect(mapStateToProps, { fetchProducts })(NewArrivals));
