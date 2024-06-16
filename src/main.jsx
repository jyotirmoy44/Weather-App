import React from 'react'
import ReactDOM from 'react-dom/client'


import { StateContextProvider } from './Context/index1.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
)

