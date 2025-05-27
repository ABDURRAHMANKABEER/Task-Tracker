import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {legacy_createStore as CreateStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Reducers/rootReducer.js'
import './index.css'
import App from './App.jsx'

const Store = CreateStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
)
