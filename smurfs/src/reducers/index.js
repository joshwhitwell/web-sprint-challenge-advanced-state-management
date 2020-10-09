//action types
import { FETCH_SUCCESS, FETCH_START, FETCH_FAILURE } from '../actions'

//create initial state object
const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

//export smurfReducer
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}