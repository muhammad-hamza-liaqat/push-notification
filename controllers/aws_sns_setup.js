// npm install aws-sdk

// configture aws sdk with your credentials
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// aws sdk to send push notifications
// const AWS = require('aws-sdk');

const sns = new AWS.SNS();

const params = {
    Message: 'Your push notification message',
    MessageStructure: 'string',
    TargetArn: 'your-topic-arn'
    // replace 'yyour-topic-arn' with ARN amazon resource name of the sns topic 
    // targer ARN specifies which group will receive the notifications such as iOS, android or web applications.
    // each topic has unique ARN, once the topic is created. you'll be redirected to topic details page. here you can find the amazon resource name (ARN),
    // which will uniquely identifies your SNS topic.
};

sns.publish(params, (err, data) => {
    if (err) {
        console.error('Error sending a push notification:', err);
    } else {
        console.log('Push notification sent successfully:', data);
    }
});

