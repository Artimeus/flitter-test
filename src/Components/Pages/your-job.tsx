import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../Store/Actions';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SubmitButton from '../atoms/submit-button';

function YourJob(){

    const [displayAllProfessions, setDisplayAllProfessions] = useState(false);
    const [selectedProfession, setSelectedProfession] = useState("");
    const [isGeneralErrorMessageDisplayed, setIsGeneralErrorMessageDisplayed] = useState(false);

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
        if (selectedProfession != "") {
            dispatch(allActions.userActions.setProfession(selectedProfession));
            dispatch(allActions.formStepsActions.goToNextStep());
        }
        else {
            setIsGeneralErrorMessageDisplayed(true);
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSelectedProfession(event.target.value);
    }

    function handleDisplayAllProfessions() {
        setDisplayAllProfessions(true);
    }

    function getFormControlLabel(selectedMap: Map<string, string>) {
        const linesArray = [];
        for (const entry of selectedMap.entries()) {
            linesArray.push(<FormControlLabel
                value={entry[0]}
                control={<Radio />}
                label={entry[1]}
                // labelPlacement="start"
                key={entry[0]}
                className= {selectedProfession === entry[0] ? 'formControlLabel checkedFormControlLabel' :'formControlLabel'}
                sx={{
                    '& .MuiTypography-root ': {
                        fontFamily: "Circular Std",
                        fontSize: 18,
                    },
                  }}
                />);  
        }
        return linesArray;

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
                        <Button
                            className='see-more-professions-button'
                            onClick={() => handleDisplayAllProfessions()}>Voir plus de professions<AddCircleIcon></AddCircleIcon>
                            {/* sx={{
                                '& .MuiButton-root': {
                                    fontFamily: "Circular Std",
                                    fontSize: 16,
                                },
                            }} */}
                        </Button>
                    }

                </FormControl>
                <div className='next-button'>
                    <SubmitButton label="Suivant"></SubmitButton>
                    {
                        isGeneralErrorMessageDisplayed &&
                        <span className='form-error-helper'>Veuillez sélectionner votre profession.</span>
                    }
                </div>
            </form>
        </div>
    );
}

export default YourJob;