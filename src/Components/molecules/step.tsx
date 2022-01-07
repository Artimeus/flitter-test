import { LinearProgress } from '@mui/material';
import React from 'react';

function Step(props: any) {
    return (
        <div className='step'>
            <p>{props.stepTitle}</p>
            {/* <div style={{height: '8px', width: '180px', backgroundColor: 'orange'}}></div> */}
            <LinearProgress variant="determinate" value={0}></LinearProgress>
        </div>
    );
}

export default Step;