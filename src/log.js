function log_test (commandName, answer) {
    let log = '';
    log += commandName +'\n' + answer + '\n';
        if (commandName === '!log') {
        client.say(log);
    }
    if (commandName === '!clean')
    {
        log ='';
    }
  }

module.exports = { log_test };