import { Button } from '@mui/material';
import React from 'react';


interface BrandButtonInterface {
    brand: string,
}
function BrandButton(props: BrandButtonInterface) {
    
    const imageUrl = require(`../../assets/brands/${props.brand}.png`);

    return (
        <Button className='brand-button'>
            <img src={imageUrl} alt={props.brand}/>
        </Button>
    );
}

export default BrandButton;