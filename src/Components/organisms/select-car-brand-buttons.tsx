import BrandButton from '../molecules/brand-button';

interface SelectCarBrandButtonsInterface {
    handleClick: (event: string) => void,
}

function SelectCarBrandButtons(props: SelectCarBrandButtonsInterface) {
    return (
        <div className='select-brand-area'>
            <BrandButton brand="PEUGEOT" handleClick={props.handleClick}></BrandButton>
            <BrandButton brand="RENAULT" handleClick={props.handleClick}></BrandButton>
            <BrandButton brand="CITROEN" handleClick={props.handleClick}></BrandButton>
            <BrandButton brand="VOLSKWAGEN" handleClick={props.handleClick}></BrandButton>
            <BrandButton brand="DACIA" handleClick={props.handleClick}></BrandButton>
            <BrandButton brand="TOYOTA" handleClick={props.handleClick}></BrandButton>
            <BrandButton brand="MERCEDES" handleClick={props.handleClick}></BrandButton>
            <BrandButton brand="FORD" handleClick={props.handleClick}></BrandButton>
            <BrandButton brand="BMW" handleClick={props.handleClick}></BrandButton>
        </div>
    );
}

export default SelectCarBrandButtons;