'use client'
import socketIOClient from "socket.io-client";
let token = ''
if (typeof window !== 'undefined') {
    token = localStorage.getItem('accessToken') as string || ''
}
// let url = "https://fe97-184-22-67-102.ngrok-free.app"
let url = "https://loops-bookings-api.loops-transport.com:449"
// let url = "http://localhost:3005"
export const socket = socketIOClient(url, {
    transports: ["websocket"],
    auth: {
        token
    }
});
