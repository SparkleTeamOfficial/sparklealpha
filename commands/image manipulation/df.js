const Discord = require("discord.js");
const {
    get
} = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        let target
        if (message.attachments) {
            target = message.attachments.url
        } else {
            target = message.mentions.users.first().avatarURL || bot.fetchUser(args[0]).avatarURL || message.author.avatarURL;
        }
        let url = `https://nekobot.xyz/api/imagegen?type=deepfry&image=${target}`
        get(url).then(res => {
            const embed = new Discord.RichEmbed()
                .setColor("fea5ff")
                .setAuthor("Deepfried!")
                .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed);
            }, 200);
        });
    } catch (err) {
        console.log(err);
    }

}
module.exports.command = {
    name: 'deepfry',
    aliases: ["df"],
    permission: "",
    description: "Deepfries the image",
    usage: ">deepfry [image|member id|member mention]",
    category: "Image Manipulation",
    enabled: true
}