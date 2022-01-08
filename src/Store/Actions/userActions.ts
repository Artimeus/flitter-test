import Action from "../../Interfaces/CarAction"
import UserAction from "../../Interfaces/CarAction"

const setUserName = (userName: string) => {
    return {
        type: "SET_USER",
        payload: userName,
    }
}

const setCarModel = (carModel: string) => {
    return {
        type: "SET_CAR_MODEL",
        payload: carModel,
    }
}

const setProfession = (profession: string) => {
    return {
        type: "SET_PROFESSION",
        payload: profession,
    }
}

export default {
    setUserName,
    setCarModel,
    setProfession
}