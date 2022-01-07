import React from 'react';

function Step(props: any) {
    return (
        <div>
            <p>{props.stepTitle}</p>
            <div style={{height: '8px', width: '180px', backgroundColor: 'orange'}}></div>
        </div>
    );
}

export default Step;