const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("Bot çalışıyor!");
});

client.login(process.env.MTQ2NDM5Mjg1MTEwNTI1NTU1Ng.GoyVC9.fAdJIDMJjvBAT3BCw5Pc_fBnPrqdwoHuPnlsKU);
