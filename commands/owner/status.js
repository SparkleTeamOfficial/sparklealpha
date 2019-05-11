module.exports.run = async (bot, message, args) => {
    if (message.author.id === "281667533453524994") {
    const status = args.join(" ");
    if(args == "") return message.channel.send("You need to specify a status!");
    bot.user.setActivity(status)
    message.channel.send(`Set the playing status to ${status}!`)
}
}
module.exports.command = {
    name: 'status',
    aliases: ["st"],
    permission: "",
    description: "Set the bot's playing status.",
    usage: ">status [new status]",
    category: "Owner",
    enabled: true
};