const goToNextStep = () => {
    return {
        type: "GO_NEXT_STEP",
    }
}

const goToPreviousStep = () => {
    return {
        type: "GO_PREVIOUS_STEP",
    }
}

export default {
    goToNextStep,
    goToPreviousStep
}