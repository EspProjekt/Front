import React, { createContext, useContext, useEffect, useState } from 'react';
import { apiClient, apiUrl }  from './service';
import { toast } from 'react-toastify';


export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [deviceList, setDeviceList] = useState([]);


    function connectToWebSocket(){
        const ws = new WebSocket(`ws://${apiUrl}/session`);


        ws.onopen = () => {
            setSocket(ws);
        };


        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setDeviceList(message)
        }


        ws.onclose = () => {
            console.log("Disconnected");

            ws.close();
            setIsConnected(false);
            setSocket(null);
        };


        setSocket(ws);
    };

    function handleStatusCode(statusCode, expectedStatus, message){
        if (statusCode !== expectedStatus) return toast.error("An error occurred!")
        toast.success(message)
    }

    async function fetchDeviceList(){
        const response = await apiClient.get('/device-list');
        const data = response.data;
    
        setDeviceList(data);
    }
    

    async function handleLightModeChange(deviceId) {
        const response = await apiClient.post(`/device/light/${deviceId}`);
        const status = response.status;
        const data = response.data;

        setDeviceList(data);
        handleStatusCode(status, 200, "Light changed!");

    }
    
    async function handleReconnect(deviceId){
        const response = await apiClient.post(`/device/reconnect/${deviceId}`)
        const status = response.status;
        const data = response.data;

        setDeviceList(data);
        handleStatusCode(status, 200, "Reconnect attempt was made!");
    }

    async function handleDisconnect(deviceId){
        const response = await apiClient.delete(`/device/deactivate/${deviceId}`)
        const status = response.status;
        const data = response.data;
        
        setDeviceList(data);
        handleStatusCode(status, 204, "Device disconnected!");
    }

    useEffect(() => {
        fetchDeviceList();
        connectToWebSocket();
    
        if (socket) return () => { socket.close(); };
    }, []);


    return (
        <WebSocketContext.Provider value={{ 
            deviceList,
            handleLightModeChange,
            handleReconnect,
            handleDisconnect,
            }
        }>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => useContext(WebSocketContext);