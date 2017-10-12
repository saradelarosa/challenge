import React from 'react'
import { Route, Link } from 'react-router-dom'
import App from './components/App'
import logo from './assets/images/logo.png'

//New Arrivals Pages
import Women from './components/Women.js'
import Men from './components/Men.js'
import Girls from './components/Girls.js'
import Boys from './components/Boys.js'

//Inner Product Page
import InnerPage from './components/InnerPage.js';

const Routes = () => (
  <div>
    <header className="header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <div className="NavSeparation">
        <Link to="/women">women</Link>
        <Link to="/men">men</Link>
        <Link to="/girls">girls</Link>
        <Link to="/boys">boys</Link>
      </div>
    </header>
    <main>
      <Route exact path="/" component={App} />
      <Route exact path="/women" component={Women} />
      <Route exact path="/men" component={Men} />
      <Route exact path="/girls" component={Girls} />
      <Route exact path="/boys" component={Boys} />
      <Route exact path="/innerpage" component={InnerPage} />
    </main>
  </div>
)

export default Routes
