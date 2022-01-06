import currentUser from "./currentUser";
import carBrandsManagement from "./car-brands-management";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    currentUser,
    carBrandsManagement
})

export default rootReducer;