# NODE SMS CONFIRMATION

This is a simple way of confirming email by sending a 5 or 6 digit code to the client's mailbox, and confirming the code submitted by the client. This method is used by several websites like  **Twitter**, **Nexmo**, **Facebook** etc.

## Using  this Work

**Clone this repository**  
>``` git clone https://github.com/Qudusayo/node-sms-confirmation.git```

**Install all dependencies**  
>``` npm install ```

**Run to test on localhost**  
>```npm start ```

### How this work  

When the user inputs their phone number and press the confirm button, the confirmation page is rendered and  a 5 or 6-digit code is sent to their sms inbox. If they check their sms box for the code and confirm, if success,the success page is  rendered, but if  error, the index page is rendered that is to restart the confirmation all over

### Settings
Visit [Nexmo](https://nexmo.com), register to get your API key and API secret, then **update** all info in _user.js_