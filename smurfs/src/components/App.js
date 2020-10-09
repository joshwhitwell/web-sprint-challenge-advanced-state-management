//react dependencies
import React, { Component } from "react"

//redux dependencies
import { connect } from 'react-redux'

//styles
import "./App.css"

//actions
import { fetchSmurfs } from '../actions'

//App
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs('http://localhost:3333/smurfs')
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <p>{this.props.state.test}</p>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    )
  }
}

//map redux state to component props
const mapStateToProps = (state) => {
  return {
    state
  }
}

//connect App to redux store
export default connect(mapStateToProps, { fetchSmurfs })(App)
