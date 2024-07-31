const { Telegraf } = require('telegraf');
const TOKEN = "7262836212:AAFxl29RDuqxLMbsHaif62KRpoAZIzAFhpY";
const bot = new Telegraf(TOKEN);

const web_link = "https://lovely-blini-b41fac.netlify.app";

bot.start((ctx) =>
    ctx.reply("Welcome :)))))", {
      reply_markup: {
        keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
      },
    })
  );
  
  bot.launch();