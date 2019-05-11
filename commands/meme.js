const Discord = require("discord.js");
const { get } = require("snekfetch");
module.exports.run = async (bot, message, args) => { 
    try {
 get("https://api-to.get-a.life/meme").then(res => {
            const embed = new Discord.RichEmbed()
            .setImage(res.body.url)
            .setColor("fea5ff")
            .setAuthor(`M3M3`)

            setTimeout(() => {
                return  message.channel.send({embed});
            }, 100);
        });
    } catch(err) {
        console.log(err);
    }
}
module.exports.command = {
name: 'meme',
aliases: ["m3m3"],
usable: "Users",
description: "Send a random meme.",
usage: ">meme",
category: "Image",
enabled: true
};
