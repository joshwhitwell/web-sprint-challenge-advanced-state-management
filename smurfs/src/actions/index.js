//dependencies
import axios from 'axios'

//action types
export const FETCH_SUCCESS = 'FETCH_SUCCESS'

//actions
export const fetchSmurfs = (url) => (dispatch) => {
    axios.get(url)
        .then(res => {
            console.log('fetchSmurfs response', res)
            dispatch({ type: FETCH_SUCCESS })
        })
        .catch(err => {
            console.log(err)
        })
}