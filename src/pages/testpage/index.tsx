import React, { useEffect, ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import { Button, Box, Typography, Checkbox, Grid } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { useLoading } from '@/contexts/loadingContext';

import { useRouter } from 'next/router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { socket } from '../../utils/socket';
import { useSocket } from '@/contexts/SocketContext';
type TermProfilePageWithLayOut = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const TermProfile: TermProfilePageWithLayOut = () => {
  let router = useRouter()
  const { setIsLoading } = useLoading();
  const { data } = useSocket()



  useEffect(() => {
    socket.emit('joinRoom', localStorage.getItem('userId'));
  }, []);



  const handleEmitStart = () => {
    socket.emit('joinRoom', localStorage.getItem('userId'));
    socket.emit('start')
  }
  const handleEmitPause = () => {
    socket.emit('joinRoom', localStorage.getItem('userId'));
    socket.emit('pause')
  }
  const handleEmitResume = () => {
    socket.emit('joinRoom', localStorage.getItem('userId'));
    socket.emit('resume')
  }
  const handleEmitStop = () => {

    const submitValue =
    {
      reason: 'sick'
    }
    socket.emit('joinRoom', localStorage.getItem('userId'));
    socket.emit('stop', 
      submitValue
    );
  }




  return (

    <>
      <center>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <button onClick={handleEmitStart}>
              Click for start emit
            </button>
          </Grid>
          <Grid item xs={12}>
            <button onClick={handleEmitPause}>
              Click for pause emit
            </button>
          </Grid>
          <Grid item xs={12}>
            <button onClick={handleEmitResume}>
              Click for resume emit
            </button>
          </Grid>
          <Grid item xs={12}>
            <button onClick={handleEmitStop}>
              Click for stop emit
            </button>
          </Grid>
        </Grid>
      </center>
    </>

  );
};

TermProfile.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>


  );
};

export default TermProfile;
