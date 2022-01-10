import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../Store/Actions';
import { RootState } from '../../Store/store';
import SubmitButton from '../atoms/submit-button';
import RecapList from '../molecules/recap-list';

interface RecapInterface {
    selectedAccident: string,
    selectedGlassBreakage: string
}

function Recap(props: RecapInterface) {

    const dispatch= useDispatch();

    const price = useSelector((state: RootState) => state.priceValues.price);

    const deductiblesRequestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
        body: JSON.stringify({ 
            "id": useSelector((state: RootState) => state.priceValues.id),
            "excess_da": props.selectedAccident,
            "excess_bdg": props.selectedGlassBreakage,
         })
    };

    useEffect(() => {
        fetch('https://test-api-7qyau6jusq-oa.a.run.app/api/v1/quote/price', deductiblesRequestOptions)
        .then(result => {
            if (result.ok) {
                return result.json()
            }
            else {
                return result.text().then(text => {throw new Error(text)})
            }
        })
        .then(data => dispatch(allActions.priceValuesActions.setPriceValues({price: data.qt_price_ttc, id: data.id})))
        .catch((error => console.log('Erreur : Prix suivant franchises introuvable', error))); 
    }, [props.selectedAccident, props.selectedGlassBreakage]);

    return(
        <>
            <div className='price-zone'>
                <h2 className='your-price-title'>Votre prix estimé</h2>
                <div className='total-price'>
                    {
                        price != -1 &&
                        <div className='price'><span>{price} €</span></div>
                    } 
                    <div className='per-month'><span>/mois</span></div>
                </div>
                <RecapList></RecapList>
                <SubmitButton label="Enregistrer les franchises"></SubmitButton>
            </div>

        </>
    )
}

export default Recap;