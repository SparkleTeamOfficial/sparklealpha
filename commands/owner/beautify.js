const Discord = require("discord.js");
const beautify = require("beautify");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let lang = args[0].toLowerCase();
    let x = args.slice(1).join(" ");
    let y = `\`\`\`${lang}\n${beautify(x, {format: "js"})}\n\`\`\``;
    message.channel.send(y);
}

module.exports.command = {
name: 'beautify',
aliases: ["btfy"],
permission: "",
description: "Beautify code.",
usage: ">beautify CODE!",
category: "Owner",
enabled: true
};
