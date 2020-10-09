//react dependencies
import React, { useState } from 'react'

//redux dependencies
import { connect } from 'react-redux'

//actions
import { postSmurf } from '../actions/index'

//initial form values
const initialValues = {
    name: '',
    age: '',
    height: '',
    id: null
}

//Form
function Form(props) {
    const [values, setValues] = useState(initialValues)

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postSmurf({...values, id: Math.floor(Math.random() * 1000) +1})
        setValues(initialValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type='text'
                name='name'
                value={values.name}
                onChange={handleChanges}
            />
            <label>Age</label>
            <input
                type='text'
                name='age'
                value={values.age}
                onChange={handleChanges}
            />
            <label>Height</label>
            <input
                type='text'
                name='height'
                value={values.height}
                onChange={handleChanges}
            />
            <button>Submit</button>
        </form>
    )
}

//map redux state to component props
// const mapStateToProps = (state) => {
//     return {
//       state
//     }
//   }

export default Form