module.exports.run = async (bot,message,args) => {
    let target = message.mentions.users.first() || message.author;
    const Discord = require('discord.js')
    const embed = new Discord.RichEmbed()
    .setAuthor(`${target.tag}`)
    .setDescription(`[Original image](${target.avatarURL})`)
    .setImage(`${target.avatarURL}`)
    message.channel.send("Generating image...").then((msg) => {
    msg.edit(embed)
    });
}
module.exports.command = {
name: 'avatar',
aliases: ["av"],
usable: "Users",
description: "Provides you with either your avatar or the user you wish.",
usage: ">av | >av <@USER/ID>",
category: "Image",
enabled: true
};
