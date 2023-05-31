import { actionTypes } from "../actions/actionTypes"
// in reducer, we need to check action and state
const initialState = {
    categories: []
}
export const categoryReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case actionTypes.FETCH_CATEGORY: 
            return{ ...state, categories: payload }
        default: 
        return state
    }
}