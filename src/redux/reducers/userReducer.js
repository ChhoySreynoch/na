import { actionTypes } from "../actions/actionTypes"
// in reducer, we need to check action and state
const initialState = {
    users: []
}
export const userReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case actionTypes.FETCH_USER: 
            return{ ...state, users: payload }
        default: 
        return state
    }
}