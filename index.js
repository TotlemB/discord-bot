require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

const TOKEN = process.env.DISCORD_TOKEN;

client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.channel.send('🏓 Pong!');
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.systemChannel;
  if (channel) {
    channel.send(`🎉 ¡Bienvenido/a al servidor, ${member.user.username}!`);
  }
});

client.login(TOKEN);