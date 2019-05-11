const { exec } = require("child_process");
module.exports.run = async (bot, message, args) => {
    if (!message.author.id === "208688963936845824") return;
    try {
        const outputErr = (message, stdData) => {
            const { stdout, stderr } = stdData;
            const msg = stdout.concat(`\`\`\`${stderr}\`\`\``);
            message.edit(msg);
          };
          
          const doExec = (cmd, opts = {}) => {
            return new Promise((resolve, reject) => {
              exec(cmd, opts, (err, stdout, stderr) => {
                if (err) return reject({ stdout, stderr });
                resolve(stdout);
              });
            });
          };
        const command = 'git pull';
        //args.join(' ');
        const outMessage = await message.channel.send('`Deploying...`');
        //await msg.channel.send(`Running \`${command}\`...`);
        let stdOut = await doExec(command).catch(data=> outputErr(outMessage, data));
        stdOut = stdOut.substring(0, 1750);
        outMessage.edit(`\`DEPLOYMENT STATUS\`
      \`\`\`sh
      ${stdOut}
      \`\`\``);
    } catch (err) {
        return await message.channel.send(`Error while updating\n\`\`\`xl\n${err.stack}\`\`\``);
    }

}
module.exports.command = {
    name: 'pull',
    aliases: ["p"],
    permission: "",
    description: "Pull from gitlab",
    usage: ">pull",
    category: "Owner",
    enabled: true
};