import React from 'react';
import Button from '@mui/material/Button';
import Logo from '../atoms/logo';


function Header() {
    return (
        <div>
        <Button>Retour</Button>
        <Logo></Logo>
            <p>Header</p>
        </div>
    );
}

export default Header;