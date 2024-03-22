const express = require('express');
const Pushy = require('pushy');
const app = express();
app.use(express.json());
require("dotenv").config();

// Initialize Pushy client with your API key
const pushyAPI = new Pushy(process.env.PUSHY_API_KEY);

let subscriptions = [];

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  console.log("subscription", subscription);
  subscriptions.push(subscription);
  res.status(201).json({ message: "Subscription successful!", status_code: 201 });
});

app.post('/send-notification', (req, res) => {
  const { pushyToken, notification } = req.body;
  if (!pushyToken || !notification) {
    return res.status(400).json({ error: 'Device token and notification payload are required' });
  }
  const recipient = pushyToken.toString();

  pushyAPI.sendPushNotification(notification, recipient, {}, (err, id) => {
    if (err) {
      console.error('Error sending notification:', err);
      return res.status(500).json({ error: 'Error sending notification' });
    }
    console.log('Notification sent successfully with ID:', id);
    res.status(200).json({ message: 'Notification sent successfully' });
  });
});



const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
