const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        if(!args[0]){
message.channel.send('⛔ **Incorrect format.**\n`>kanna TEXT`')
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=kannagen&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.RichEmbed()
            .setColor("fea5ff")
            .setAuthor("Kanna says..")
            .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed);
            }, 100);
        });
    } catch(err) {
        let errchannel = bot.channels.get('523969673239461892')
        errchannel.send(err)
        console.log(err)    
    }
}
module.exports.command = {
name: 'kanna',
aliases: ["kannasays"],
usable: "Users",
description: "Sends a picture of Kanna holding a sign with the user's input on it.",
usage: ">kanna <TEXT>",
category: "Image Manipulation",
enabled: true
};