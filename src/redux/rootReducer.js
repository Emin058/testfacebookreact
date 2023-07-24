import { combineReducers } from "redux";
import user from "./reducers/user"
import auth from "./reducers/auth";

export const rootReducer = combineReducers({
    user,auth
});
