const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
console.log("penis");
message.channel.send(`<@${message.author.id}> thank you for your suggestion, we have sent it to the admins.`);
let embed = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setThumbnail(message.author.displayAvatarURL)
.setFooter(`ID: ${message.author.id}`)
.setTitle("NEW SUGGESTION", `https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`)
.setDescription(`**By:** ${message.author.tag}.\n\n__**Suggestion:**__\n${args.join(" ")}`)
bot.channels.get("576121771430903808").send(embed)
}
module.exports.command = {
name: 'suggest',
aliases: ["s", "suggestion"],
useable: "Users",
description: "Suggest anything you want.",
usage: ">s suggestion",
category: "Temporary",
enabled: true
};