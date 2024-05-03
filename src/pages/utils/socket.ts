'use client'
import socketIOClient from "socket.io-client";
let token = ''
if (typeof window !== 'undefined') {
    token = localStorage.getItem('accessToken') as string || ''
}
// let url = "https://fe97-184-22-67-102.ngrok-free.app"
let url = "https://096a-184-22-144-240.ngrok-free.app"
export const socket = socketIOClient(url, {
    transports: ["websocket"],
    auth: {
        token
    }
});
