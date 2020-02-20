const tmi = require('tmi.js');
require('custom-env').env();

const test_mess = require('./message.js')

const opts = {
  identity: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  },
  channels: [
    process.env.USER_NAME
  ]
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();


function onMessageHandler (target, context, msg, self) {
  if (self) { return; }

    test_mess.message_test(target, context, msg, self, client)
}

function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}