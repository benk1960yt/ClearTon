const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', function(message) {
  if (message.content == "$clear") {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.fetchMessages()
        .then(function(list){
          message.channel.bulkDelete(list);
      }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
    }
  }

});

client.login(process.env.BOT_TOKEN);
