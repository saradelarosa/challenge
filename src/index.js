import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import Routes from './Routes.js'
import registerServiceWorker from './registerServiceWorker';

const root = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>,
  root
);
registerServiceWorker();
