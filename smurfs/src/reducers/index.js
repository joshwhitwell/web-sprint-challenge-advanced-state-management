//action types
import { FETCH_SUCCESS } from '../actions'

//create initial state object
const initialState = {
    smurfs: [],
    test: 'test'
}

//export smurfReducer
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SUCCESS:
            console.log('FETCH_SUCCESS reducer case')
            return state
        default:
            return state
    }
}