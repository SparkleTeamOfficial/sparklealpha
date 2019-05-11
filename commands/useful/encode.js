const base64 = require("base-64");
const utf8 = require("utf8");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let t = args.join(" ");
    if (!t) messag.reply("Please provide something to encode");
    let u = utf8.encode(t);
    let b = base64.encode(u);
    message.channel.send(b);
}

module.exports.command = {
    name: 'encode',
    aliases: ["ncode"],
    usable: "Users",
    description: "Encodes the user input.",
    usage: ">encode <TEXT>",
    category: "Useful",
    enabled: true
};