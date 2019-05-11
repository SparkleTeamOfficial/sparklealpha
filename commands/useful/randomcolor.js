const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let hex = Math.floor(Math.random() * 16777216).toString(16);

   let embed = new Discord.RichEmbed()
        .setColor(hex)
        .setThumbnail(`https://www.colorhexa.com/${hex}.png`)
        .addField("Color generated:", "#" + hex.toUpperCase());
    return message.channel.send(embed);
}
module.exports.command = {
    name: 'randomcolor',
    aliases: ["randomcolour", "randcolor", "randcolour"],
    usable: "Users",
    description: "Gives you a random hex color with preview.",
    usage: ">randcolor",
    category: "Useful",
    enabled: true
};