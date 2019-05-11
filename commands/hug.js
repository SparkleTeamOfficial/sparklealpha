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
        await get("https://nekos.life/api/hug").then(res => {
            const embed = new Discord.RichEmbed()
                .setImage(res.body.url)
                .setColor("fea5ff")
                .setAuthor(`Warm Hugs!`)
                .setDescription(`**<@${message.author.id}>** is hugging ${target}`)
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
    name: 'hug',
    aliases: ["hugs"],
    usable: "Users",
    description: "Hug someone.",
    usage: ">>hug <@USER/ID>",
    category: "Image",
    enabled: true
};