import React from 'react';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import RecapListElement from '../atoms/recap-list-element';


// profession: "",
// firstName: "",
// lastName: "",
// mail: ""

function RecapList() {

    const carModel = useSelector((state: RootState) => state.currentUser.carModel);

    return (
        <div className='recap-list'>
            <RecapListElement icon={<DirectionsCarFilledIcon/>} title={carModel}></RecapListElement>
            <hr className='separation-bar'/>
            <RecapListElement icon={<GppGoodIcon/>} title="Formule essentielle 8000 km 45€ / mois"></RecapListElement>
            <hr className='separation-bar'/>
            <RecapListElement icon={<CheckCircleIcon/>} title="Véhicule de remplacement 2€ / mois"></RecapListElement>
        </div>
    );
}

export default RecapList;