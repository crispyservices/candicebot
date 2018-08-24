const fs = require("fs")
const botconfig = require("./botconfig.json")
const Discord = require("discord.js")
const bot = new Discord.Client({fetchAllMembers: true})


bot.commands = new Discord.Collection()



fs.readdir("./commands/", (err, files) => {
	if(err) console.log(err)


})

process.on("error", console.error)
bot.on("ready", async () => {
	console.log(`${bot.user.username} is now on!`)
	bot.user.setActivity("My vids", {type: "PLAYING"});

})


bot.on('message', message => {
    let msg = message.content.toUpperCase();

if (msg.includes(`CRACKING`)) {
    message.delete();
 }

if (msg.includes(`CRACK`)) {
   message.delete();

}

if (msg.includes(`COMBOLIST`)) {
 message.delete();
}

if (msg.includes(`NIGGER`)) {
 message.delete();
}
if (msg.includes(`NIGGERS`)) {
 message.delete();
}
if (msg.includes(`HACK`)) {
 message.delete();
}
if (msg.includes(`HACKS`)) {
 message.delete();
}
if (msg.includes(`CHEAT`)) {
 message.delete();
}
if (msg.includes(`CHEATS`)) {
 message.delete();
}


});

bot.login(botconfig.token);
