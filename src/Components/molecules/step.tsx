import { LinearProgress } from '@mui/material';

interface StepInterface {
    stepTitle: string
}

function Step(props: StepInterface) {
    
    const isFirstStep = (props.stepTitle === "voiture" || props.stepTitle === "formule") ? true : false;
    
    return (
        <div className='step'>
            <p>{props.stepTitle}</p>
            {
                isFirstStep &&
                <LinearProgress variant="determinate" value={20}></LinearProgress>
            }
            {
                !isFirstStep &&
                <LinearProgress variant="determinate" value={0}></LinearProgress>
            }
        </div>
    );
}

export default Step;