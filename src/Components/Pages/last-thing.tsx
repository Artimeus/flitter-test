import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, ToggleButton } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import CheckIcon from '@mui/icons-material/Check';
import { AccountCircle } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import allActions from '../../Store/Actions';
import SubmitButton from '../atoms/submit-button';

function LastThing(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [isReceiveQuotationSelected, setIsReceiveQuotationSelected] = useState(false);

    const dispatch = useDispatch();
    
    function handleFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
        setFirstName(event.target.value);
    }
    
    function handleLastNameChange(event: ChangeEvent<HTMLInputElement>) {
        setLastName(event.target.value);
    }
    
    function handleMailChange(event: ChangeEvent<HTMLInputElement>) {
        setMail(event.target.value);
    }
    
    function handleSubmit(event: any) {
        event.preventDefault();
        dispatch(allActions.userActions.setPersonalData({
            firstName: firstName,
            lastName: lastName,
            mail: mail
        }));
        dispatch(allActions.formStepsActions.goToNextStep());
    }

    return(
        <div className='page last-thing'>
            <h1 className='title'>Une dernière chose !</h1>

            <form onSubmit={handleSubmit}>
            <div className='form-names'>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-lastname">Nom</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-lastname"
                    type='text'
                    value={lastName}
                    onChange={handleLastNameChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <PersonIcon/>
                    </InputAdornment>
                    }
                    label="First Name"
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-firstname">Prénom</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-firstname"
                    type='text'
                    value={firstName}
                    onChange={handleFirstNameChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <PersonIcon/>
                    </InputAdornment>
                    }
                    label="First Name"
                />
            </FormControl>
            </div>
            <div>
                <FormControl component="fieldset"
                    sx={{
                        '& .MuiFormControl-root': {
                            width: "576px",
                            fontSize: "14px"
                        },
                    }}
                >
                    <TextField
                        label="Adresse mail"
                        type="text"
                        variant="outlined"
                        onChange={handleMailChange}
                        InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <MailIcon />
                              </InputAdornment>
                            ),
                          }}
                    />
                </FormControl>
            </div>

            <FormControl component="fieldset"
                sx={{
                    '& .MuiTypography-root': {
                        width: "576px",
                        fontSize: 14
                    },
                }}
            >

                <div>
                    <FormControlLabel control={<Checkbox
                        checked={isReceiveQuotationSelected}
                        onChange={() => {
                            setIsReceiveQuotationSelected(!isReceiveQuotationSelected);
                        }}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />}
                        label="J'accepte que Flitter m'envoie mon devis et des conseils pour protéger ma voiture."
                    />
                </div>
            </FormControl>
                    
                <div className='next-button'>
                    <SubmitButton label='Finaliser votre devis (pour de bon)'></SubmitButton>
                </div>
            </form>
        </div>
    );
}

export default LastThing;