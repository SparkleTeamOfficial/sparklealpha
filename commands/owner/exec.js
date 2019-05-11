const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    const {
        exec
    } = require('child_process');
    if (!message.author.id === "208688963936845824") return;
    let messagep = await message.channel.send('Processing...') 
    exec(args.join(' '), (err, stdout, stderr) => {
        if (err) {
            message.delete()
            return message.channel.send(`\`\`\`bash\n${err}\`\`\``);
        };
        if (stdout.length > 2000) {
            messagep.delete()
            return message.channel.send('Response too long');
        }
        if (stdout.length !== 0) {
            messagep.edit(`\`\`\`bash\n${stdout}\`\`\``)
        }
    });
}
module.exports.command = {
    name: 'exec',
    aliases: ["ex", "execute"],
    permission: "",
    description: "Execute a shell command",
    usage: ">exec [command]",
    category: "Owner",
    enabled: true
}