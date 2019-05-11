const Discord = require("discord.js");
const {
    get
} = require("snekfetch");
module.exports.run = async (bot, message, args) => {
    try {
        let target;
        if (!args[0]) {
            target = `<@${message.author.id}>`
        } else {
            target = args.join(" ")
        }
        await get("https://nekos.life/api/kiss").then(res => {
            const embed = new Discord.RichEmbed()
                .setImage(res.body.url)
                .setColor("0xFFB6C1")
                .setAuthor(`Hot Kisses!`)
                .setDescription(`**<@${message.author.id}>** is kissing ${target}`)
            setTimeout(() => {
                return message.channel.send({
                    embed
                });
            }, 300);
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports.command = {
    name: 'kiss',
    aliases: ["kisses"],
    usable: "Users",
    description: "Kiss someone.",
    usage: ">>kiss <@USER/ID>",
    category: "Image",
    enabled: true
};