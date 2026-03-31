const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');

const app = express();
const port = 3000;

const client = new Client({
    authStrategy: new LocalAuth()
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('WhatsApp Bot is running!');
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr); // Generate and scan this QR code on your phone
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log('Received message:', message.body);
    // Add message handling logic here
});

client.initialize();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
