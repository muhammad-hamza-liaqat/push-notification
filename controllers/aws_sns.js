var AWS = require('aws-sdk');
var config = require('./config'); // Assuming you have a config file

AWS.config.update({
    accessKeyId: config.AWSAccessKeyId,
    secretAccessKey: config.AWSSecretKey,
    region: config.AWSRegion
});

var sns = new AWS.SNS(); // Corrected instantiation

var params = {
    Name: "test",
    Platform: "GCM", //or APNS (Apple) or ADM (Amazon)
    Attributes: {
        PlatformCredential: config.PlatformCredential // API key which is used to register your app in play store
        //http://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html => for more info about Attributes
    }
};

sns.createPlatformApplication(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data); // retrieve PlatformApplicationArn
    }
});

params = {
    PlatformApplicationArn: "string_value", // your PlatformApplication ARN STRING
    Token: "string_value", // every phone is given token when phone download and register to your app. STRING
    CustomUserData: "String_value", // you can write anything about the user so that you can identify him
    Attributes: {
        //optional
        //http://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html => for more info
    }
};

sns.createPlatformEndpoint(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

params = {
    Name: "string_value"
};
sns.createTopic(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data); // returns topic ARN
    }
});

params = {
    Message: 'STRING_VALUE', /* required */
    MessageAttributes: {
        someKey: {
            DataType: 'STRING_VALUE', /* required */
            BinaryValue: new Buffer('...') || 'STRING_VALUE',
            StringValue: 'STRING_VALUE'
        },
    },
    MessageStructure: 'STRING_VALUE',
    Subject: 'STRING_VALUE',
    TargetArn: 'STRING_VALUE',
    TopicArn: 'STRING_VALUE'
};
sns.publish(params, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});

params = {
    Protocol: 'STRING_VALUE', /* required */ //http , https ,application
    TopicArn: 'STRING_VALUE', /* required */ // topic you want to subscribe
    Endpoint: 'STRING_VALUE' // the endpoint that you want to receive notifications.
};
sns.subscribe(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
