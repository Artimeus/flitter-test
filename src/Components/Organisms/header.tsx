import React from 'react';
import Button from '@mui/material/Button';
import Logo from '../atoms/logo';
import Step from '../molecules/step';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useDispatch } from 'react-redux';
import allActions from '../../Store/Actions';

// customiser les steptitle en fonction que le header est appelé depuis un composant voiture ou le composant formule

function Header(props: any) {

    const formStep = props.formStep;
    const dispatch = useDispatch();

    function handleGoBackClick() {
        dispatch(allActions.formStepsActions.goToPreviousStep());
    }

    return (
        <div className='header'>
            {
                formStep !== 1 &&
                <div className='go-to-previous-step'>
                    <Button onClick={() => handleGoBackClick()}><KeyboardBackspaceIcon/>Retour</Button>
                </div>
            }
            
            {formStep < 4 && 
                <div className='steps'>
                    <Step stepTitle='voiture'></Step>
                    <Step stepTitle='infos'></Step>
                    <Step stepTitle='usage'></Step>
                </div>
            }

            {formStep === 4 && 
                <div className='steps'>
                    <Step stepTitle='formule'></Step>
                    <Step stepTitle='options'></Step>
                    <Step stepTitle='souscrire'></Step>
                </div>
            }

            <div className='logo'>
                <Logo></Logo>
            </div>
        </div>
    );
}

export default Header;