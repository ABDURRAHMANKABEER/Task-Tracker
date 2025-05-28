import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {legacy_createStore as CreateStore } from 'redux'
import { Provider } from 'react-redux'
import tasks from './Reducers/taskReducer.js'
import './index.css'
import App from './App.jsx'

const Store = CreateStore(tasks);

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
)
