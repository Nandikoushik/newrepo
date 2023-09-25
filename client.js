import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Replace with your server URL

// ...

// Handle logout event
useEffect(() => {
  socket.on('logout', (message) => {
    // Handle the logout event (e.g., display a message to the user)
    console.log(message);
    
    // You may also want to clear user data and redirect to the login page
  });

  return () => {
    socket.off('logout'); // Clean up when the component unmounts
  };
}, []);
