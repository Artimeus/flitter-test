import Action from "../../Interfaces/CarAction";
import Car from "../../Interfaces/car";

const initialState = {
    cars: new Array<Car>(),
    brandNames: new Array<string>()
}

const CarBrandsManagement = (state = initialState, action: Action) => {
    switch (action.type){
        case ('ADD_CAR_BRAND'): {
            let nextState = {
                ...state,
                cars: [...state.cars.concat(action.payload)],
                brandNames: [...state.brandNames.concat(action.payload.name)]

                // individualVotes: [...state.individualVotes, action.payload]
            }
            console.log(nextState);
            return nextState;            
        }
        
        default: {
            return state;
        }
    }
}

export default CarBrandsManagement;