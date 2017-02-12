const TelegramBot = require('node-telegram-bot-api');

const token = '241266751:AAEIvk3sFB7gGN2iE8rfFU0OiYm-NI8gdUk';

const botOptions = {
  polling: true
}

const bot = new TelegramBot(token, botOptions);

bot.getMe().then(function(me) {
    console.log('As-salamu alaykum! My name is ', me.first_name);
    console.log('My id is ', me.id);
    console.log('And my username is ', me.username);
});

bot.on('text', function(msg) {
  const messageChatId = msg.chat.id;
  const messageText = msg.text;
  const messageDate = msg.date;
  const messageUrl = msg.from.username;

  bot.sendMessage(messageChatId, 'As-salamu alaykum, World!');
  console.log(msg);
});
