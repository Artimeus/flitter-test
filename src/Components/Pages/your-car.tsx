import { Autocomplete, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import Header from '../organisms/header';
import SelectCarBrandButtons from '../organisms/select-car-brand-buttons';
import SearchIcon from '@mui/icons-material/Search';
import allActions from '../../Store/Actions';


function YourCar(){
    
    const dispatch = useDispatch();
    const brands = useSelector((state: RootState) => state.carBrandsManagement.cars);
    const brandNames = useSelector((state: RootState) => state.carBrandsManagement.brandNames);
    
    console.log(brands);

    useEffect(() => {
        fetch('https://test-api-7qyau6jusq-oa.a.run.app/api/v1/car/brands')
        .then(result => result.json())
        .then(data => data.map((x: { id: number; name: string; }) => {
            dispatch(allActions.carActions.setCarsBrands({id: x.id, name: x.name}));
        }))
    }, []);

    return(
        <>
            <Header></Header>
            <Button disabled><SearchIcon></SearchIcon>Rechercher par immatriculation</Button>
            <h1>Votre voiture</h1>
            <div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={brandNames}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Marque ou modèle" 
                    />}
                />
                <p>Cliquez sur le logo de votre marque ou tapez-la dans la barre de recherche</p>
            </div>

            <SelectCarBrandButtons></SelectCarBrandButtons>

        </>
    );
}

export default YourCar;