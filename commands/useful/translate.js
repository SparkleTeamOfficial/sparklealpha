const Discord = require("discord.js");
const translate = require("translate");

module.exports.run = async (bot, message, args) => {
     // Define variables
    let fromLang = args[0];
    let toLang = args[1];
    let toTrans = args.slice(2).join(" ");

    // Check if there's a defined lang
    if (!fromLang) {
        message.reply("Please define which language you want to translate from");
    }

    if (!toLang) {
        message.reply("Please define a language you want to translate to");
    }

    if (!toTrans) {
        message.reply("Please define what you want to get translated");
    }
    
    // Execute code
    let func = await translate(toTrans, {
        from: `${fromLang}`,
        engine: "yandex",
        key: "trnsl.1.1.20180607T181259Z.f778775b471d9136.a7261b986750ba59db8228a5d48d2484627801cc",
        to: `${toLang}`
    });

    let embed = new Discord.RichEmbed()
        .setTitle("Translation!")
        .setDescription(`I translated the request from ${fromLang} to ${toLang}`)
        .addField(`From`, toTrans)
        .addField(`To`, func)
        .setColor("0xFFB6C1")
        .setThumbnail("http://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Translate-icon.png")
        .setFooter("This translation might not be 10/10", bot.user.avatarURL)

    message.channel.send(embed);
}

module.exports.command = {
    name: 'translate',
    aliases: ["language"],
    usable: "Users",
    description: "Translates user's input from any language to any language.",
    usage: ">translate <lang1> <lang2> <TEXT>",
    category: "Useful",
    enabled: true
};