import CarAction from "../../Interfaces/CarAction"
import Car from "../../Interfaces/car"

const setCarsBrands = (car: Car) : CarAction => {
    return {
        type: "ADD_CAR_BRAND",
        payload: car,
    }
}

export default {
    setCarsBrands,
}