//dependencies
import axios from 'axios'

//action types
export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'


//actions
export const fetchSmurfs = (url) => (dispatch) => {
    dispatch({ type: FETCH_START })
    axios.get(url)
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_FAILURE, payload: err})
        })
}