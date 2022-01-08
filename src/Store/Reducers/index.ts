import currentUser from "./currentUser";
import carBrandsManagement from "./car-brands-management";
import { combineReducers } from "redux";
import formStepsManagement from "./formStepsManagement";

const rootReducer = combineReducers({
    currentUser,
    carBrandsManagement,
    formStepsManagement
})

export default rootReducer;