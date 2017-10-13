import React, { Component } from 'react'
import { Thumbnail, Col, Grid, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../index.css'
import Navbar from './Navbar.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="newArrivals">
          <Grid>
            <Row>
            <Col xs={12} md={6} lg={3}>
              <Thumbnail src="https://i.s-jcrew.com/is/image/jcrew/H1895_BK0001" alt="242x200">
                <h3>Women</h3>
                <p>New Arrivals</p>
                <p>
                  <Link to="/c/womens_feature/newarrivals"><Button bsStyle="primary">View</Button></Link>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Thumbnail src="https://i.s-jcrew.com/is/image/jcrew/F7054_WQ3414" alt="242x200">
                <h3>Men</h3>
                <p>New Arrivals</p>
                <p>
                  <Link to="/c/mens_feature/newarrivals"><Button bsStyle="primary">View</Button></Link>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Thumbnail src="https://i.s-jcrew.com/is/image/jcrew/G7886_NA6434" alt="242x200">
                <h3>Girls</h3>
                <p>New Arrivals</p>
                <p>
                  <Link to="/c/girls_feature/newarrivals"><Button bsStyle="primary">View</Button></Link>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Thumbnail src="https://i.s-jcrew.com/is/image/jcrew/G9056_ST9953" alt="242x200">
                <h3>Boys</h3>
                <p>New Arrivals</p>
                <p>
                  <Link to="/c/boys_feature/newarrivals"><Button bsStyle="primary">View</Button></Link>
                </p>
              </Thumbnail>
            </Col>
            </Row>
          </Grid>
        </div>

      </div>
    );
  }
}

export default App;
