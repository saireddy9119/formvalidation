// Specify changed values
import smartsheet from 'smartsheet';
var body = {
    enabled: true
};

 // Set options
var options = {
    webhookId: 6798390655772548,
    body: body
};

// Update webhook
smartsheet.webhooks.updateWebhook(options)
    .then(function(updatedWebhook) {
        console.log(updatedWebhook);
    })
    .catch(function(error) {
        console.log(error);
    });