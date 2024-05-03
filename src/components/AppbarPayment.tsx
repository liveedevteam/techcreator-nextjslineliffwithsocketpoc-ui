
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';


interface AppBarPaymentComponentProps {
    handleClickButton: (action: string) => void;
}

const AppBarPaymentComponent: React.FC<AppBarPaymentComponentProps> = ({ handleClickButton }) => {




    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ยอดชำระเงิน: 6,000 บาท
                </Typography>

                <Button variant='contained' onClick={() => handleClickButton("verifyPaymentWay")}>
                    ชำระเงิน
                </Button>


            </Toolbar>
        </AppBar>
    );
};

export default AppBarPaymentComponent;
