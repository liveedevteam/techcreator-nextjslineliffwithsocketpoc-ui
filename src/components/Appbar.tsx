
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const AppBarHead = () => {




    return (
        <>
            <AppBar position="fixed" style={{ backgroundColor: '#ffffff', top: 0, bottom: 'auto' }}>
                <Toolbar>
                    <img src={'logo.png'} height="45px"></img>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default AppBarHead;
