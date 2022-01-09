const initialState: any = {
    price: -1,
    id: -1
}

const PriceValues = (state = initialState, action: any) => {
    switch(action.type){
        case "SET_PRICE_VALUES":{
            if (action.payload !== "") {
                return {
                    ...state,
                    price: action.payload.price,
                    id: action.payload.id,
                }
            }
            else return state;
        }

        default:
            return state;
    }
}

export default PriceValues;