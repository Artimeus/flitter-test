import { Autocomplete, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import SelectCarBrandButtons from '../organisms/select-car-brand-buttons';
import SearchIcon from '@mui/icons-material/Search';
import allActions from '../../Store/Actions';


function YourCar(){
    
    const dispatch = useDispatch();
    const brands = useSelector((state: RootState) => state.carBrandsManagement.cars);
    const brandNames = useSelector((state: RootState) => state.carBrandsManagement.brandNames);

    const [isDisplayInvalidBrandMessageEnabled, setIsDisplayInvalidBrandMessageEnabled] = useState(false);
    useEffect(() => {
        fetch('https://test-api-7qyau6jusq-oa.a.run.app/api/v1/car/brands')
        .then(result => {
            if (result.ok) {
                return result.json()
            }
            else {
                return result.text().then(text => {throw new Error(text)})
            }
        })
        .then(data => data.map((x: { id: number; name: string; }) => {
            dispatch(allActions.carActions.setCarsBrands({id: x.id, name: x.name}))
        }))
        .catch((error => console.log('Erreur : Marques introuvables', error)));
    }, []);

    function handleSelectBrand(event: any) {
        setPersonalCarData(event.target.textContent);
    }

    function handleClickOnBrand(brand: string) {
        setPersonalCarData(brand);
    }

    function setPersonalCarData(brand: string){
        const brandId = brands.find(x => x.name == brand)?.id;

        if (undefined === brandId){
            setIsDisplayInvalidBrandMessageEnabled(true);
        } 
        else {
            fetch(`https://test-api-7qyau6jusq-oa.a.run.app/api/v1/car/model/${brandId}`)
            .then(result => {
                if (result.ok) {
                    return result.json()
                }
                else {
                    return result.text().then(text => {throw new Error(text)})
                }
            })
            .then(data => dispatch(allActions.userActions.setCarModel(data.name)))
            .catch((error => console.log('Erreur : Modèle introuvable', error)));
    
            setTimeout(function () {
                dispatch(allActions.formStepsActions.goToNextStep());
            }, 300);
        }
    }

    return(
        <div className='page your-car'>
            <div className='immatriculation-search'>
                <Button disabled startIcon={<SearchIcon/>}>Rechercher par immatriculation</Button>
            </div>
            <h1 className='title'>Votre voiture</h1>
            <div className='select-brand-autocomplete'>
                <Autocomplete
                    disablePortal
                    id="get-car-brands"
                    options={brandNames}
                    sx={{ width: 300 }}
                    onChange={e => handleSelectBrand(e)}
                    renderInput={
                        (params) => <TextField {...params} label="Marque ou modèle"
                    />}
                />
                <p>Cliquez sur le logo de votre marque ou tapez-la dans la barre de recherche</p>
            </div>

            <SelectCarBrandButtons handleClick={handleClickOnBrand}></SelectCarBrandButtons>
            {
                isDisplayInvalidBrandMessageEnabled &&
                <span className='form-error-helper'>Merci de sélectionner une autre marque.</span>
            }
        </div>
    );
}

export default YourCar;