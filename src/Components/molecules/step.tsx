import { LinearProgress } from '@mui/material';
import React from 'react';

function Step(props: any) {
    const isFirstStep = (props.stepTitle === "voiture" || props.stepTitle === "formule") ? true : false;
    return (
        <div className='step'>
            <p>{props.stepTitle}</p>
            {/* <div style={{height: '8px', width: '180px', backgroundColor: 'orange'}}></div> */}
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