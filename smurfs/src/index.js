//react dependencies
import React from "react"
import ReactDOM from "react-dom"

//redux dependencies
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//styles
import "./index.css"

//components
import App from "./components/App"

//reducer
import { reducer } from './reducers'

//store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"))
