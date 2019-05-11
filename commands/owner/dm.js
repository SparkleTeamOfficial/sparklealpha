module.exports.run = async (bot, message, args) => {
    if(message.author.id === "208688963936845824"){
            const sayMessage = args.slice(1).join(' ')

            let client = message.channel.client;

            let dmer = client.fetchUser(args[0]).then(dmer => {
                dmer.send("**(" + message.author.tag + "):** " + sayMessage);
                message.channel.send('DM Sent.')
            });        
    }
    }
module.exports.command = {
    name: 'dm',
    aliases: ["msg"],
    permission: "",
    description: "Direct messages users.",
    usage: ">dm <message>",
    category: "Owner",
    enabled: true
};
