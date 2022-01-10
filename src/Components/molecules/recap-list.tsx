import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import GppGoodIcon from '@mui/icons-material/GppGood';
import RecapListElement from '../atoms/recap-list-element';
import { RootState } from '../../Store/store';
import { useSelector } from 'react-redux';

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