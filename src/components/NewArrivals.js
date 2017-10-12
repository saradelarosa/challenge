import React, { Component } from 'react'
import { Thumbnail, Col, Grid, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions'
import { Link } from 'react-router-dom'

class NewArrivals extends Component {

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
                    return (
                      <Col xs={6} md={4}>
                        <Thumbnail src={images} alt="242x200">
                          <p className="tileText">{product.productDescription}</p>
                          <Link to="/innerpage"><Button bsStyle="primary">View Product</Button></Link>
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
    console.log(this.props.product, 'this is the product!!!')
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

export default connect(mapStateToProps, { fetchProducts })(NewArrivals);
