import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../organisms/header';
import SelectCarBrandButtons from '../organisms/select-car-brand-buttons';

function YourCar(){

    let [brands, setBrands] = useState([]);
    
    console.log(brands);

    useEffect(() => {
        fetch('https://test-api-7qyau6jusq-oa.a.run.app/api/v1/car/brands')
        .then(result => result.json())
        .then(data => setBrands(data));
    }, []);

    return(
        <>
            <Header></Header>
            <div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={brands}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Marque ou modèle" />}
                />
            </div>

            <SelectCarBrandButtons></SelectCarBrandButtons>

        </>
    );
}

export default YourCar;