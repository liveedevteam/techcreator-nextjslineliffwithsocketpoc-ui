
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';

interface StepperComponentProps {
    activeStep: number;
    stepTitle: string;
}


const StepperComponent: React.FC<StepperComponentProps> = ({ activeStep, stepTitle }) => {

    const steps = [
        '',
        '',
        '',
        '',
    ];


    return (
        <>
            <Box sx={{ width: '100%', marginTop: '17px' }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                    <br></br>

                </Stepper>
                <br></br>
                <br></br>
                <center>
                    <Typography >{stepTitle}</Typography>
                </center>
            </Box>
        </>
    );
};

export default StepperComponent;
