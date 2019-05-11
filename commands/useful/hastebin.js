const beautify = require("beautify");
const hastebin = require("hastebin-gen");

module.exports.run = async (bot, message, args) => {
let input = args.join(" ");
    if (!input) return;
    let lang = args[0].toLowerCase();
    let x = args.slice(1).join(" ");
    let y = `\`\`\`${lang}\n${beautify(x, {format: "js"})}\n\`\`\``;
    message.delete();
    hastebin(y, "js").then(l => {
        message.channel.send(l);
    }).catch(console.error);
}

module.exports.command = {
    name: 'hastebin',
    aliases: ["hsbin"],
    usable: "Users",
    description: "Pastes code in Hastebin and prints out link.",
    usage: ">hsbin <CODE!>",
    category: "Useful",
    enabled: true
};