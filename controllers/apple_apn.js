const apn = require('apn');

// Configure APNs connection
const options = {
  token: {
    key: 'PATH_TO_YOUR_APNS_KEY_FILE', // Path to your APNs key file
    keyId: 'YOUR_APNS_KEY_ID',          // Your APNs key ID
    teamId: 'YOUR_TEAM_ID'               // Your Apple Developer Team ID
  },
  production: false // Set to true if sending to production environment
};

const apnProvider = new apn.Provider(options);

// Create a new notification
const notification = new apn.Notification();
notification.alert = 'Hello, this is a push notification!';
notification.sound = 'default';

// The device token of the iOS device you want to send the message to
const deviceToken = 'DEVICE_TOKEN';

// Send the notification
apnProvider.send(notification, deviceToken)
  .then((result) => {
    console.log('Push notification sent:', result);
  })
  .catch((error) => {
    console.error('Error sending push notification:', error);
  });
