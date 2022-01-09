const setPersonalData = (personalData: {firstName: string, lastName: string, mail: string}) => {
    return {
        type: "SET_PERSONAL_DATA",
        payload: personalData,
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
    setPersonalData,
    setCarModel,
    setProfession
}