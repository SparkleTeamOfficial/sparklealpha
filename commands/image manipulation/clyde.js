const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        if(!args[0]){
message.channel.send('⛔ **Incorrect format.**\n`>clyde TEXT`')
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.RichEmbed()
            .setColor("fea5ff")
            .setAuthor("Clyde says..")
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
name: 'clyde',
aliases: ["beepboop"],
usable: "Users",
description: "Sends a pictures of the user's input as a clyde message.",
usage: ">clyde <TEXT>",
category: "Image Manipulation",
enabled: true
};