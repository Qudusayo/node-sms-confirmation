const express = require('express');
const path = require('path');

const sendMessge = require('./send');

const server = express();

server.use(express.static('./public'))
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

let code;
server.post('/', (req, res) => {
    code = Math.floor(Math.random() * 903192)
    res.sendFile(path.join(__dirname, 'confirm.html'));
    sendMessge(`${req.body.tel}`, code)
})

server.post('/confirmTel', (req, res) => {
    if (req.body.code == code) {
        res.sendFile(path.join(__dirname, 'success.html'))
    } else {
        res.sendFile(path.join(__dirname, 'index.html'))
    }
});

const port = process.env.PORT || 5500
server.listen(port, () => console.log(`Server started on port ${port}`))