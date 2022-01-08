const initialState = {
    formStep: 1
}

const FormStepsManagement = (state = initialState, action: any) => {
    switch (action.type){
        case ('GO_NEXT_STEP'): {
            if (state.formStep < 4){         
                let nextState = {
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
                let nextState = {
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