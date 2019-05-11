const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        let usermentioned
        let target
        if(args == "") return message.channel.send('Specify some text')
        if(message.mentions.users.first()) {
            target = message.mentions.users.first()
            usermentioned = 1
        } else {
            usermentioned = 0
            target = message.author
        }
        let url = `https://nekobot.xyz/api/imagegen?type=phcomment&image=${target.avatarURL}&username=${target.username}&text=${args.slice(usermentioned).join(" ")}`
        get(url).then(res => {
            const embed = new Discord.RichEmbed()
            .setColor("fea5ff")
            .setAuthor("woah, naughty!")
            .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed);
            }, 200);
        });
    } catch(err) {
        let errchannel = bot.channels.get('523969673239461892')
        errchannel.send(err)
        console.log(err)    
    }
}
module.exports.command = {
name: 'pornhub',
aliases: ["ph"],
usable: "Users",
description: "Send a picture of the user's input as a comment on pornhub.",
usage: ">ph <TEXT>",
category: "Image Manipulation",
enabled: true
};
