import React, { useEffect, useState } from 'react';
import LoadingOverlay from '@/components/LoadingOverlay';
import { LoadingProvider } from '@/contexts/loadingContext';
import { AppProps } from 'next/app';
import { render } from 'react-dom';
import Head from 'next/head';
import { Box } from '@mui/material';
import ThemeProviderComponent from '@/components/ThemeProvider';
import { createTheme, ThemeProvider } from '@mui/material';
import { socket } from '@/utils/socket';
import { SocketProvider } from '@/contexts/SocketContext';
import { useSocket } from '@/contexts/SocketContext';
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {


  // const { updateData } = useSocket();

  useEffect(() => {
    const initLiff = async () => {
      const { default: liff } = await import('@line/liff');
      try {
        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string });
      } catch (error) {
        console.error('Error initializing LIFF:', error);
      }
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        const accessToken = liff.getAccessToken();
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
        }
        const profile = await liff.getProfile();
        localStorage.setItem('userId', profile.userId)
        console.log(profile);
        // Emit the userId right after setting it
        socket.emit('joinRoom', profile.userId);
        socket.on('counter', (data: any) => {  // Specify the type of 'data' if known
          console.log(data)
          // Use the context to update the data
          // updateData(data);
        });
      }
    };

    initLiff();

    return () => {
      socket.off('connect');
      socket.off('counter');
      socket.off('stopResult');
    };
  }, []);




  return (
    <>
      <SocketProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <LoadingProvider>
          <Component {...pageProps} />
        </LoadingProvider>
      </SocketProvider>
    </>
  );
};

export default MyApp;
