const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Bot giriş yaptı: ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('Pong! :ping_pong:');
  }
});

client.login('MTQ2NDM5Mjg1MTEwNTI1NTU1Ng.GoyVC9.fAdJIDMJjvBAT3BCw5Pc_fBnPrqdwoHuPnlsKU');
