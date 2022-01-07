import { Button } from '@mui/material';
import React from 'react';
import lul from './Green check.png';


interface BrandButtonInterface {
    brand: string,
}
function BrandButton(props: BrandButtonInterface) {
    
    const imageUrl = require(`../../assets/brands/${props.brand}.png`);

    return (
        <Button>
            <img src={imageUrl} width="125px" height="125px" alt={props.brand}/>
        </Button>
    );
}

export default BrandButton;