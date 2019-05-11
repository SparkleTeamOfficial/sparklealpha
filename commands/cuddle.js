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
        get("https://nekos.life/api/v2/img/cuddle").then(res => {
            const embed = new Discord.RichEmbed()
                .setImage(res.body.url)
                .setColor("fea5ff")
                .setAuthor(`Cute Cuddles!`)
                .setDescription(`**<@${message.author.id}>** is cuddling ${target}`)
            setTimeout(() => {
                return message.channel.send({
                    embed
                });
            }, 100);
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports.command = {
    name: 'cuddle',
    aliases: ["cuddles"],
    usable: "Users",
    description: "Cuddle someone.",
    usage: ">>cuddle <@USER/ID>",
    category: "Image",
    enabled: true
};