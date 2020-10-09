//react dependencies
import React, { useState } from 'react'

//initial form values
const initialValues = {
    name: '',
    age: '',
    height: '',
    id: null
}

//Form
export const Form = () => {
    const [values, setValues] = useState(initialValues)

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //submit action creator
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