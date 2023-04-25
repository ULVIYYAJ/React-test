// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:8000");

// const SocketIOExample = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.on("message", (data) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });
//   }, []);

//   const sendMessage = () => {
//     socket.emit("message", message);
//     setMessage("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Gönder</button>
//       <ul>
//         {messages.map((msg, index) => (
//           <li key={index}>{msg}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SocketIOExample;