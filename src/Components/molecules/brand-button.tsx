import { Button } from '@mui/material';

interface BrandButtonInterface {
    brand: string,
    handleClick: (event: string) => void,
}
function BrandButton(props: BrandButtonInterface) {
    
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const imageUrl = require(`../../assets/brands/${props.brand}.png`);

    return (
        <Button className='brand-button'
                onClick={() => props.handleClick(props.brand)}
                title={props.brand}
                value={props.brand}>
            <img src={imageUrl} alt={props.brand}/>
        </Button>
    );
}

export default BrandButton;