const initialState: any = {
    carModel: "",
    profession: ""
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
        default:
            return state;
    }
}

export default currentUser;