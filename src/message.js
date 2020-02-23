function message_test (target, context, msg, self, client) {
    if (self) { return; }
    const commandName = msg.trim();

    if (commandName === '!test') {
        let answer = 'оно тупо робить';
        client.say(target, answer);
        log_test (commandName, msg);
    }
  }

module.exports = { message_test };