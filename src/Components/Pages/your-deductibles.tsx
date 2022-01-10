import { FormLabel, InputLabel, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json } from 'stream/consumers';
import allActions from '../../Store/Actions';
import rootReducer from '../../Store/Reducers';
import { RootState } from '../../Store/store';
import Recap from '../organisms/recap';

function YourDeductibles(){

    enum Accident {
        REDUCED = "REDUCED",
        DEFAULT = "DEFAULT",
        INCREASED = "INCREASED"
    }

    enum GlassBreakage {
        REDUCED = "REDUCED",
        DEFAULT = "DEFAULT"
    }

    const [selectedAccident, SetSelectedAccident] = useState(Accident.DEFAULT.toString());
    const [selectedGlassBreakage, SetSelectedGlassBreakage] = useState(GlassBreakage.DEFAULT.toString());

    const dispatch = useDispatch();

    const priceRequestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
        body: JSON.stringify({ 
            "brand": useSelector((state: RootState) => state.currentUser.carModel),
            "job": useSelector((state: RootState) => state.currentUser.profession),
            "first_name": useSelector((state: RootState) => state.currentUser.firstName),
            "last_name": useSelector((state: RootState) => state.currentUser.lastName),
            "email": useSelector((state: RootState) => state.currentUser.mail)
         })
    };
    
    useEffect(() => {
            fetch('https://test-api-7qyau6jusq-oa.a.run.app/api/v1/quote/price', priceRequestOptions)
            .then(result => {
                if (result.ok) {
                    return result.json()
                }
                else {
                    return result.text().then(text => {throw new Error(text)})
                }
            })
            .then(data => dispatch(allActions.priceValuesActions.setPriceValues({price: data.qt_price_ttc, id: data.id})))
            .catch((error => console.log('Erreur : Prix introuvable', error))); 
    }, []);

    function handleAccident(event: any) {
        if(event.target.value != undefined) {
            SetSelectedAccident(event.target.value);
        }
    }

    function handleGlassBreakage(event: any) {
        if(event.target.value != undefined) {
            SetSelectedGlassBreakage(event.target.value);
        }
    }

    return(
        <div className='page your-deductibles'>
            <div className='deductibles-zone'>
                <div className='deductible-text-area'>
                    <h2 className='your-deductibles-title'>Vos franchises</h2>
                    <p>L'assistance 0 km est incluse dans tous nos contrats, boostez votre couverture.</p>
                </div>

                <div className='form-group-buttons'>
                    <InputLabel htmlFor='glass-breakage-group'>Bris de glace</InputLabel>
                    <ToggleButtonGroup
                        id='glass-breakage-group'
                        value={selectedGlassBreakage}
                        exclusive
                        onClick={handleGlassBreakage}
                        aria-label="Bris de glace"
                    >
                        <ToggleButton value={GlassBreakage.REDUCED} aria-label="0 €">
                            0 €
                        </ToggleButton>
                        <ToggleButton value={GlassBreakage.DEFAULT} aria-label="70 €">
                            70 €
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <InputLabel htmlFor='accident-group'>Accident</InputLabel>
                    <ToggleButtonGroup
                        id='accident-group'
                        value={selectedAccident}
                        exclusive
                        onClick={handleAccident}
                        aria-label="Accident"
                        >
                        <ToggleButton value={Accident.REDUCED} aria-label="0 €">
                            0 €
                        </ToggleButton>
                        <ToggleButton value={Accident.DEFAULT} aria-label="250 €">
                            250 €
                        </ToggleButton>
                        <ToggleButton value={Accident.INCREASED} aria-label="500 €">
                            500 €
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            <Recap selectedAccident={selectedAccident} selectedGlassBreakage={selectedGlassBreakage}></Recap>
            
        </div>
    );
}

export default YourDeductibles;