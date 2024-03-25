// npm install aws-sdk

// configture aws sdk with your credentials
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// create a new sns object
const sns = new AWS.SNS();

//  define the parameters for creating topic
const params = {
    Name: 'MyTopic' // topic_name
};

// creating the sns topic
sns.createTopic(params, (err, data) => {
    if (err) {
        console.error('Error creating SNS topic:', err);
    } else {
        console.log('SNS topic created successfully:', data);
        console.log('Topic ARN:', data.TopicArn); // Print the ARN of the created topic
    }
});


// aws sdk to send push notifications
// const AWS = require('aws-sdk');

// const sns = new AWS.SNS();

const params3 = {
    Message: 'Your push notification message',
    MessageStructure: 'string',
    TargetArn: 'your-topic-arn'
    // replace 'yyour-topic-arn' with ARN amazon resource name of the sns topic 
    // targer ARN specifies which group will receive the notifications such as iOS, android or web applications.
    // each topic has unique ARN, once the topic is created. you'll be redirected to topic details page. here you can find the amazon resource name (ARN),
    // which will uniquely identifies your SNS topic.
};

sns.publish(params3, (err, data) => {
    if (err) {
        console.error('Error sending a push notification:', err);
    } else {
        console.log('Push notification sent successfully:', data);
    }
});


// aws publish push notifications

const AWS = require('aws-sdk');

// Configure AWS SDK with your credentials and specify the region
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'your-region' // Specify the AWS region you are working in
});

// Create a new SNS object
// const sns = new AWS.SNS();

// Define the parameters for publishing a message
const params2 = {
    Message: 'Hello from SNS!', // The message you want to publish
    TopicArn: 'arn:aws:sns:your-region:your-account-id:MyTopic' // Replace with your SNS topic ARN
};

// Publish the message to the SNS topic
sns.publish(params2, (err, data) => {
    if (err) {
        console.error('Error publishing message:', err);
    } else {
        console.log('Message published successfully:', data);
    }
});


