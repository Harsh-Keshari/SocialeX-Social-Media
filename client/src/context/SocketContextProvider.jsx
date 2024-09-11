import React, { createContext, useEffect, useState} from 'react';
import socketIoClient from 'socket.io-client';


export const SocketContext = createContext();

const WS = 'https://socialex-social-media.onrender.com';

const socket = socketIoClient(WS);

export const SocketContextProvider =  ({children}) => {

    <SocketContext.Provider  value={{socket}} >{children}</SocketContext.Provider>
}

