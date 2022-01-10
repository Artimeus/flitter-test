const initialState: any = {
    carModel: "",
    profession: "",
    firstName: "",
    lastName: "",
    mail: ""
}

const currentUser = (state = initialState, action: any) => {
    switch(action.type){
        case "SET_CAR_MODEL":{
            if (action.payload !== "") {
                return {
                    ...state,
                    carModel: action.payload,
                }
            }
            else return state;
        }

        case "SET_PROFESSION":
        { 
            if(action.payload != "") {
                return {
                    ...state,
                    profession: action.payload,
                }
            }
            else return state;
        }

        case "SET_PERSONAL_DATA":
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                mail: action.payload.mail
            }
        default:
            return state;
    }
}

export default currentUser;