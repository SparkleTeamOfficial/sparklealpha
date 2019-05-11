const Discord = require("discord.js");
const {
    get
} = require("snekfetch");
module.exports.run = async (bot, message, args) => {
    try {
        get("https://nekos.life/api/v2/fact").then(res => {
            const embed = new Discord.RichEmbed()
                .setDescription(res.body.fact)
                .setColor("#0078ff")
                .setAuthor(`Facts!`)
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
    name: 'fact',
    aliases: ["knowledge"],
    usable: "Users",
    description: "Sends out a random fact.",
    usage: ">fact",
    category: "Misc",
    enabled: true
};