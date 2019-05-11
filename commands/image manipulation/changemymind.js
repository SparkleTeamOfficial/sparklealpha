const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        if(!args[0]){
message.channel.send('⛔ **Incorrect format.**\n`>changemymind TEXT`')
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=changemymind&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.RichEmbed()
            .setColor("#0078ff")
            .setAuthor("Change my mind..")
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
name: 'changemymind',
aliases: ["cmm"],
usable: "Users",
description: "Sends a pictures of the user's input on a \"change my mind\" Sign.",
usage: ">>cmm <TEXT>",
category: "Image Manipulation",
enabled: true
};
