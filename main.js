const Discord = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) {
    // msg.reply('Pong!');
    msg.channel.send('Pong!');
  }
  if (msg.content.startsWith(`${PREFIX}ouiounon`)) msg.channel.send('NON!');
  if (msg.content.startsWith(`${PREFIX}embêterlemonde`)) msg.channel.send('@everyone me voilà!');
});

client.login(TOKEN);
