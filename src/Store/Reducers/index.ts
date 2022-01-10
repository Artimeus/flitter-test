import currentUser from "./current-user";
import carBrandsManagement from "./car-brands-management";
import { combineReducers } from "redux";
import formStepsManagement from "./form-steps-management";
import priceValues from "./price-values";

const rootReducer = combineReducers({
    currentUser,
    carBrandsManagement,
    formStepsManagement,
    priceValues
})

export default rootReducer;