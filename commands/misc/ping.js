module.exports.run = async (bot, message, args) => {
    let start = Date.now();
    let messagesent = await message.channel.send('hong!');
    messagesent.edit(`hong! \`${Date.now() - start}ms\``);
}
module.exports.command = {
    name: 'ping',
    aliases: ["mm", "pong", "hong", "hing"],
    usable: "Users",
    description: "Sends the bot's latency in milliseconds",
    usage: ">ping",
    category: "Misc",
    enabled: true
};