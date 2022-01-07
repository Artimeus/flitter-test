import React from 'react';
import Button from '@mui/material/Button';
import Logo from '../atoms/logo';
import Step from '../molecules/step';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// customiser les steptitle en fonction que le header est appelé depuis un composant voiture ou le composant formule

function Header() {
    return (
        <div>
            <Button><KeyboardBackspaceIcon/>Retour</Button>
            <div>
                <Step stepTitle='voiture'></Step>
                <Step stepTitle='infos'></Step>
                <Step stepTitle='usage'></Step>
            </div>
            <Logo></Logo>
        </div>
    );
}

export default Header;