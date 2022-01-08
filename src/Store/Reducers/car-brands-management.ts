import Action from "../../Interfaces/CarAction";
import Car from "../../Interfaces/car";

const initialState = {
    cars: new Array<Car>(),
    brandNames: new Array<string>()
}

const CarBrandsManagement = (state = initialState, action: Action) => {
    switch (action.type){
        case ('ADD_CAR_BRAND'): {
            if (!state.brandNames.includes(action.payload.name)){         
                const nextState = {
                    ...state,
                    cars: [...state.cars.concat(action.payload)],
                    brandNames: [...state.brandNames.concat(action.payload.name)]
                }
                return nextState;            
            }
            else {
                return state;
            }
        }
        
        default: {
            return state;
        }
    }
}

export default CarBrandsManagement;