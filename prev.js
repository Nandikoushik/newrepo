app.post('/login', (req, res) => {
    const userId = req.body.userId;
    const userSocket = req.socket;
  
    // Check if the user has an active session
    if (userSessions.has(userId)) {
      const previousSocket = userSessions.get(userId);
      
      // Notify the previous device to log out the user
      previousSocket.emit('logout', 'You have been logged out from another device.');
    }
  
    // Store the new WebSocket connection
    userSessions.set(userId, userSocket);
    res.sendStatus(200);
  });
  