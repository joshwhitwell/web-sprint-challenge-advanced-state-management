//react dependencies
import React from "react"
import ReactDOM from "react-dom"

//redux dependencies
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

//styles
import "./index.css"

//components
import App from "./components/App"

//reducer
import { reducer } from './reducers'

//react dev tools composer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//store
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"))
