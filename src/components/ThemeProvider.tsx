
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useTheme, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Radio } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
const ThemeProviderComponent = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ff0000', // Replace with your desired primary color
            },
        },
    });


};
export default ThemeProviderComponent;
