import currentUser from "./currentUser";
import carBrandsManagement from "./car-brands-management";
import { combineReducers } from "redux";
import formStepsManagement from "./formStepsManagement";
import priceValues from "./price-values";

const rootReducer = combineReducers({
    currentUser,
    carBrandsManagement,
    formStepsManagement,
    priceValues
})

export default rootReducer;