import Action from "../../Interfaces/CarAction"
import UserAction from "../../Interfaces/CarAction"

const setUserName = (userName: string) => {
    return {
        type: "SET_USER",
        payload: userName,
    }
}

export default {
    setUserName,
}