import React from 'react'
import { Route, Link } from 'react-router-dom'
import App from './components/App'
import logo from './assets/images/logo.png'

//New Arrivals Pages
import Women from './components/Women.js'
import Men from './components/Men.js'
import Girls from './components/Girls.js'
import Boys from './components/Boys.js'

import ProductDetail from './components/ProductDetail.js'

const Routes = () => (
  <div>
    <header className="header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <div className="NavSeparation">
        <Link to="/c/womens_feature/newarrivals">women</Link>
        <Link to="/c/mens_feature/newarrivals">men</Link>
        <Link to="/c/girls_feature/newarrivals">girls</Link>
        <Link to="/c/boys_feature/newarrivals">boys</Link>
      </div>
    </header>
    <main>
      <Route exact path="/" component={App} />
      <Route exact path="/c/womens_feature/newarrivals" component={Women} />
      <Route exact path="/c/mens_feature/newarrivals" component={Men} />
      <Route exact path="/c/girls_feature/newarrivals" component={Girls} />
      <Route exact path="/c/boys_feature/newarrivals" component={Boys} />
      <Route exact path="/productDetail" component={ProductDetail} />
    </main>
  </div>
)

export default Routes
