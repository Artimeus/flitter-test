import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../Store/Actions';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function YourJob(){

    const [displayAllProfessions, setDisplayAllProfessions] = useState(false);

    const [selectedProfession, setSelectedProfession] = useState("");

    const dispatch = useDispatch();

    const jobsMap = new Map<string, string>([
        ["Salarie", "Salarié"],
        ["Salarie_cadre", "Cadre"],
        ["Etudiant", "Etudiant"],
        ["Sans_profession", "En recherche d'emploi"],
        ["Fonctionnaire", "Fonctionnaire"],
        ["Retraite", "Retraité"],
        ["Entrepreneur", "Entrepreneur"],
        ["Profession_libérale", "Profession libérale"],
        ["Artisans", "Artisan"],
        ["Commercant", "Commerçant"],
        ["Professeur", "Professeur"],
        ["Professionel_du_spectacle", "Professionnel du spectacle"],
        ["Agriculteur_grande_exploitation", "Agriculteur"],
        ["Vrp", "VRP"]
    ]);

    const firstJobsMap = new Map<string, string>([
        ["Salarie", "Salarié"],
        ["Salarie_cadre", "Cadre"],
        ["Etudiant", "Etudiant"],
        ["Sans_profession", "En recherche d'emploi"]
    ]);

    function handleSubmit(event: any) {
        event.preventDefault();
        dispatch(allActions.userActions.setProfession(selectedProfession));
        dispatch(allActions.formStepsActions.goToNextStep());
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSelectedProfession(event.target.value);
    }

    function handleDisplayAllProfessions() {
        setDisplayAllProfessions(true);
    }

    function getFormControlLabel(selectedMap: Map<string, string>) {
        const lul = [];
        for (const entry of selectedMap.entries()) {
            lul.push(<FormControlLabel
                value={entry[0]}
                control={<Radio />}
                label={entry[1]}
                // labelPlacement="start"
                key={entry[0]}
                className='formControlLabel'/>);  
        }
        return lul;

    }

    return(
        <div className='page your-job'>
            <h1 className='title'>Votre profession</h1>

            <form onSubmit={handleSubmit}>
                
                <FormControl component="fieldset">
  
                    <RadioGroup
                        className='radio-group'
                        aria-label="profession"
                        name="controlled-radio-buttons-group"
                        value={selectedProfession}
                        onChange={handleChange}
                    >

                    { !displayAllProfessions && getFormControlLabel(firstJobsMap)}
                    { displayAllProfessions && getFormControlLabel(jobsMap)}

                    </RadioGroup>
                    
                    {
                        !displayAllProfessions &&
                        <Button className='see-more-professions-button' onClick={() => handleDisplayAllProfessions()}>Voir plus de professions<AddCircleIcon></AddCircleIcon></Button>
                    }

                </FormControl>
                <div className='next-button'>
                    <Button type='submit' variant="contained" size="large">Suivant</Button>
                </div>
            </form>
        </div>
    );
}

export default YourJob;