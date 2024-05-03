import { useLoading } from '@/contexts/loadingContext';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import StepperComponent from '@/components/Stepper';
import { TextField, Grid, Button, Typography, Container } from '@mui/material';

import AccordionComponent from '@/components/Accordion';
import AppBarPaymentComponent from '@/components/AppbarPayment';
import AppBarHead from '@/components/Appbar';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useRouter } from 'next/router';



const IndexPage = () => {

  let router = useRouter()


  const handleTestPage = () => {
    router.push(`/testpage`)
  }





  return (
    <>
      <button onClick={handleTestPage}>
        click go to anoter page
      </button>

    </>
  );
};

export default IndexPage;
