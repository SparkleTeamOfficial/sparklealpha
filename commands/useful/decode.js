const base64 = require("base-64");
const utf8 = require("utf8");

module.exports.run = async (bot, message, args) => {
let t = args.join(" ");
    if (!t) messag.reply("Please provide something to decode");
    let b = base64.decode(t);
    let u = utf8.decode(b);
    message.channel.send(u);
}

module.exports.command = {
    name: 'decode',
    aliases: ["dcode"],
    usable: "Users",
    description: "Decodes an encoded code.",
    usage: ">decode <CODE>",
    category: "Useful",
    enabled: true
};