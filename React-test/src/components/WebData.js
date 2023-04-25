// import React, { useState , useEffect } from 'react';

// function WebData() {
//     const [price, setPrice] = useState("");
//     const [date, setDate] = useState("");
  
//     const ws = new WebSocket(
//       "ws://localhost:3333/currency"
//     );
//     const subscription = { topic: "subscribe", to: "EURUSD:CUR" };
  
//     const initWebsocket = () => {
//       ws.onopen = () => {
//         console.log("Connection Established!");
//         ws.send(JSON.stringify(subscription));
//       };
//       ws.onmessage = (event) => {
//         const response = JSON.parse(event.data);
  
//         setPrice(response.price.toFixed(3));
//         let today = new Date(response.dt * 1);
//         const options = {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//         };
//         let date = today.toLocaleDateString("en-EN", options);
//         setDate(date);
//       };
//       ws.onclose = () => {
//         console.log("Connection Closed!");
//       };
  
//       ws.onerror = () => {
//         console.log("WS Error");
//       };
//     };
  
//     useEffect(() => {
//       initWebsocket();
//       return () => {
//         ws.close();
//       };
//     }, []);
  
//     return (
//       <div>
//         Price : {price}
//         Last Update: {date}
//       </div>
//     );
//   }
  
//   export default WebData;