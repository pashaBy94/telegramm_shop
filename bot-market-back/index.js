require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const telegram_bot = new TelegramBot(process.env.KEY_BOT, { polling: true });

telegram_bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text == "/start")
    telegram_bot.sendMessage(chatId, "This is Button", {
      reply_markup: {
        keyboard: [[{ text: "Touch me" }, { text: "Touch me" }]],
      },
    });
});
