import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { profileReducer } from "./profileReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    productR: productReducer,
    authR: authReducer,
    profileR: profileReducer,
    userR: userReducer,
    cateR: categoryReducer,
})