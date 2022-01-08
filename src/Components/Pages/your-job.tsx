import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../Store/Actions';
import Header from '../organisms/header';

function YourJob(){

    const [displayAllProfessions, setDisplayAllProfessions] = useState(false);

    const [selectedProfession, setSelectedProfession] = useState("");

    const dispatch = useDispatch();

    const jobs = [
      "Salarie",
      "Salarie_cadre",
      "Etudiant",
      "Sans_profession",
      "Fonctionnaire",
      "Retraite",
      "Entrepreneur",
      "Profession_libérale",
      "Artisans",
      "Commercant",
      "Professeur",
      "Professionel_du_spectacle",
      "Agriculteur_grande_exploitation",
      "Vrp"
    ];

    const firstJobs = jobs.slice(0, 4);

    function handleSubmit(event: any) {
        event.preventDefault();
        dispatch(allActions.userActions.setProfession(selectedProfession));
        dispatch(allActions.formStepsActions.goToNextStep());
    }

    function handleChange(event: any) {
        setSelectedProfession(event.target.value);
    }

    function handleDisplayAllProfessions() {
        setDisplayAllProfessions(true);
    }

    return(
        <div className='page your-job'>
            <h1 className='title'>Votre profession</h1>

            <form onSubmit={e => handleSubmit(e)}>
                
                <FormControl component="fieldset">
                {/* <FormLabel component="legend">Gender</FormLabel> */}
  
                    <RadioGroup
                        className='radio-group'
                        aria-label="profession"
                        name="controlled-radio-buttons-group"
                        value={selectedProfession}
                        onChange={e =>handleChange(e)}
                    >
                   {
                        !displayAllProfessions && firstJobs.map((job) => {
                            return (                               
                                <FormControlLabel
                                value={job}
                                control={<Radio />}
                                label={job}
                                // labelPlacement="start"
                                key={job}
                                className='formControlLabel'/>                              
                            );

                        })
                    }
                    {
                        displayAllProfessions && jobs.map((job) => {
                            return (
                                <FormControlLabel
                                value={job}
                                control={<Radio />}
                                label={job}
                                // labelPlacement="start"
                                key={job}
                                className='formControlLabel'/> 
                            );
                        })
                    }
                    </RadioGroup>
                    
                    {
                        !displayAllProfessions &&
                        <Button onClick={() => handleDisplayAllProfessions()}>Voir plus de professions</Button>
                    }

                </FormControl>
                <div>
                    <Button type='submit'>Suivant</Button>
                </div>
            </form>
        </div>
    );
}

export default YourJob;