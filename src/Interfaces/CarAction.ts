import Car from "./car";

interface CarAction {
    type: string,
    payload: Car,
}

export default CarAction;