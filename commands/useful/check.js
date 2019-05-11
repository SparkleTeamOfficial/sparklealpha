const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        if(!args[0]){
message.channel.send('⛔ **Incorrect format.**\n`>check url`')
return;
}
        let url = `https://api.linkpreview.net/?key=5beeca297b9ec38d6996f11a4b0f404d4219625ca24c2&q=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.RichEmbed()
.setAuthor(res.body.title)
.setDescription(`${res.body.description}\n\n**[only click if you trust the link.](${res.body.url})**`)
.setFooter("This is not a validated tool, nothing is 100%", bot.user.displayAvatarURL)
            .setColor("fea5ff")
            .setImage(res.body.image)
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
    name: 'check',
    aliases: ["analyse"],
    usable: "Users",
    description: "Gives information about supplied link.",
    usage: ">check <LINK>",
    category: "Useful",
    enabled: true
};