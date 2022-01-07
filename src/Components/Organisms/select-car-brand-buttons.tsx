import React from 'react';
import BrandButton from '../molecules/brand-button';

// import Peugeot from '../../assets/brands/PEUGEOT.png';
// import Renault from '../../assets/brands/RENAULT.png';
// import Renault from '../../assets/brands/RENAULT.png';
// import Renault from '../../assets/brands/RENAULT.png';
// import Renault from '../../assets/brands/RENAULT.png';
// import Renault from '../../assets/brands/RENAULT.png';
// import Renault from '../../assets/brands/RENAULT.png';
// import Renault from '../../assets/brands/RENAULT.png';
// import Renault from '../../assets/brands/RENAULT.png';

function SelectCarBrandButtons() {
    return (
        <div>
            <BrandButton brand="PEUGEOT"></BrandButton>
            <BrandButton brand="RENAULT"></BrandButton>
            <BrandButton brand="CITROEN"></BrandButton>
            <BrandButton brand="VOLKSWAGEN"></BrandButton>
            <BrandButton brand="DACIA"></BrandButton>
            <BrandButton brand="TOYOTA"></BrandButton>
            <BrandButton brand="MERCEDES"></BrandButton>
            <BrandButton brand="FORD"></BrandButton>
            <BrandButton brand="BMW"></BrandButton>
        </div>
    );
}

export default SelectCarBrandButtons;