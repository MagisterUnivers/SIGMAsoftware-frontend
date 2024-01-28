import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BASENAME } from './constants'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
				<BrowserRouter basename={BASENAME}>
					<App />
				</BrowserRouter>
  </React.StrictMode>
)
