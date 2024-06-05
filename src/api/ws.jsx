import React, { createContext, useContext, useEffect, useState } from 'react';
import { apiClient, apiUrl }  from './service';


export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    function connectToWebSocket(){
        const ws = new WebSocket(`ws://${apiUrl}/session`);


        ws.onopen = () => {
            setSocket(ws);
        };


        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log(message);
        }


        ws.onclose = () => {
            console.log("Disconnected");

            ws.close();
            setSocket(null);
        };


        setSocket(ws);
    };

    
    useEffect(() => {
        connectToWebSocket();
        if (socket) return () => { socket.close(); };
    }, []);


    return (
        <WebSocketContext.Provider value={{ 
            }
        }>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => useContext(WebSocketContext);