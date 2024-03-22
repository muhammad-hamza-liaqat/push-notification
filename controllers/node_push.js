const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./path/to/serviceAccountKey.json"); // Path to your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Define the message payload
const message = {
  notification: {
    title: "New Message",
    body: "You have a new message!",
  },
  // You can also include custom data
  data: {
    sender: "John Doe",
    message: "Hello, how are you?",
  },
};

// The registration token of the device you want to send the message to
const registrationToken = "YOUR_DEVICE_REGISTRATION_TOKEN";

// Send the message
admin
  .messaging()
  .sendToDevice(registrationToken, message)
  .then((response) => {
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.error("Error sending message:", error);
  });
