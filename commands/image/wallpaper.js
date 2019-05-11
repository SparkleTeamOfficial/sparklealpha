const Discord = require("discord.js");
const {
    get
} = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        if (!args[0]) return message.channel.send("**Incorrect format 👀**\n**Random:** `>wp random`\n**Black & White:** `>wp b&w`.");
        let type;
        if (args[0] == "random") {
            type = "https://source.unsplash.com/random/"
        } else if (args[0] == "b&w") {
            type = "https://source.unsplash.com/featured/?b&w/"
        } else if (args[0] && args[0] != "b&w" && args[0] != "random") {
            let wants = args[0];
            type = `https://source.unsplash.com/featured/?${args[0]}/`
        }
        let size;
        if (args[1]) {
            size = args[1]
        } else if (!args[1]) {
            size = "1920x1080"
        };
        let link = type + size
        get(link).then(res => {
            let img = new Discord.Attachment(res.body);
            message.channel.send(img)
        });
    } catch (err) {
        let errchannel = bot.channels.get('523969673239461892')
        errchannel.send(err)
        console.log(err)
    }
}
module.exports.command = {
    name: 'wallpaper',
    aliases: ["wp"],
    usable: "Users",
    description: "Gives out a wallpaper either random or by user search.",
    usage: ">wp r | wp b&w | wp <KEYWORD>",
    category: "Image",
    category: "Image",
    enabled: true
};