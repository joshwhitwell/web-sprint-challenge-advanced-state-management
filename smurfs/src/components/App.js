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
        <h1>SMURFS</h1>
        {this.props.state.smurfs.map(smurf =>
          <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
          )
        }
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
