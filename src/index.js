import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/App'

const app = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
)

render(app, document.getElementById('root'))
registerServiceWorker()
