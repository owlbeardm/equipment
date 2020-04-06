import './css/styles.1.0.2.ef0599e0b4ae2fdc662b.css'

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/app'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
