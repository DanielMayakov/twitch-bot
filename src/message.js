function message_test (target, context, msg, self, client) {
    if (self) { return; }
    const commandName = msg.trim();

    if (commandName === '!test') {
        client.say(target, 'оно тупо робить');
    }
  }

module.exports = { message_test };