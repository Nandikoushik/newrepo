const userSessions = new Map();

// When a user logs in, store their WebSocket connection
app.post('/login', (req, res) => {
  const userId = req.body.userId;
  const userSocket = req.socket; // WebSocket connection associated with the user

  userSessions.set(userId, userSocket);
  res.sendStatus(200);
});
