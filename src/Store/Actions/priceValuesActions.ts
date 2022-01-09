const setPriceValues = (priceValues: any) : any => {
    return {
        type: "SET_PRICE_VALUES",
        payload: priceValues,
    }
}

export default {
    setPriceValues,
}