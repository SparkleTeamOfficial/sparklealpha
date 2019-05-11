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
        get("https://nekos.life/api/v2/img/tickle").then(res => {
            const embed = new Discord.RichEmbed()
                .setImage(res.body.url)
                .setColor("fea5ff")
                .setAuthor(`Reeeee tickles!`)
                .setDescription(`**<@${message.author.id}>** is tickling ${target}`)
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
    name: 'tickle',
    aliases: ["tickles"],
    usable: "Users",
    description: "Tickle someone.",
    usage: ">tickle <@USER/ID>",
    category: "Image",
    enabled: true
};