const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        if(!args[0]){
message.channel.send('⛔ **Incorrect format.**\n`>trump TEXT`')
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.RichEmbed()
            .setColor("fea5ff")
            .setAuthor("big boi Trump tweeted...")
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
name: 'trump',
aliases: ["trumptweet"],
usable: "Users",
description: "Sends a picture of the user's input as a tweet from Trump.",
usage: ">trump <TEXT>",
category: "Image Manipulation",
enabled: true
};
