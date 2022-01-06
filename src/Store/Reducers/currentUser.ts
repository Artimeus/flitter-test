import Action from "../../Interfaces/CarAction";
import UserAction from "../../Interfaces/CarAction";

const initialState: any = {
    user: "",
    // loggedIn: false
}

const currentUser = (state = initialState, action: UserAction) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                user: "",
                loggedIn: false
            }
        default:
            return state
    }
}

export default currentUser;