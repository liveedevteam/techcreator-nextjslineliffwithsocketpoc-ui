// src/contexts/SocketContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { socket } from '../utils/socket';

interface SocketContextType {
  data: any;  // Consider specifying a more precise type instead of 'any'
  updateData: (newData: any) => void;  // Specify the type of newData if known
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const SocketProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<any>(null);

  const updateData = (newData: any) => {
    setData(newData);
  };

  useEffect(() => {
    let token = localStorage.getItem('accessToken');
    if (token) {
      socket.auth = { token };
    }
  }, []);

  return (
    <SocketContext.Provider value={{ data, updateData }}>
      {children}
    </SocketContext.Provider>
  );
};
