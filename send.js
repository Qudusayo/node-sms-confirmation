const Nexmo = require('nexmo')

const user = require('./user')

const sendMessage = (receiver, message) => {
    console.log('Sending...............');

    const nexmo = new Nexmo({
        apiKey: user.NEXMO_API_KEY,
        apiSecret: user.NEXMO_API_SECRET
    })

    const from = user.NEXMO_BRAND_NAME
    const to = `${receiver}`
    const text = `Your Confirmation Code is ${message}`

    nexmo.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if (responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
}
module.exports = sendMessage;