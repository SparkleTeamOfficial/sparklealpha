module.exports.run = async (bot, message, args) => {
    if (message.author.id === "208688963936845824") {
        await message.channel.send("Restarting bot...");
        await process.exit()
    } else {
    return;
}}
module.exports.command = {
    name: 'restart',
    aliases: ["rs"],
    permission: "",
    description: "Restarts the bot.",
    usage: ">restart",
    category: "Owner",
    enabled: true
};