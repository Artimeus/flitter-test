const initialState = {
    formStep: 1
}

type SimpleAction = {
    type: string
}

const FormStepsManagement = (state = initialState, action: SimpleAction) => {
    switch (action.type){
        case ('GO_NEXT_STEP'): {
            if (state.formStep < 4){         
                const nextState = {
                    ...state,
                    formStep: state.formStep + 1
                }
                return nextState;            
            }
            else {
                return state;
            }
        }

        case ('GO_PREVIOUS_STEP'): {
            if (state.formStep > 1){         
                const nextState = {
                    ...state,
                    formStep: state.formStep - 1
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

export default FormStepsManagement;