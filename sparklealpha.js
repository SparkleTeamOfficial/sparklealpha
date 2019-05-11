/* --------------------------------------------------------------------------------------------------
                                        CALLING THE MODULES                                                 
   --------------------------------------------------------------------------------------------------
*/

const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');

/* --------------------------------------------------------------------------------------------------
                                        USEFUL                                               
   --------------------------------------------------------------------------------------------------
*/

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
const date = new Date();
const JoeID = "281667533453524994";

/* --------------------------------------------------------------------------------------------------
                                        EVENTS CALLER                                                
   --------------------------------------------------------------------------------------------------
*/

require('./events/handler')(bot)

/* --------------------------------------------------------------------------------------------------
                                        COMMAND HANDLER                                                 
   --------------------------------------------------------------------------------------------------
*/

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const loadCommands = module.exports.loadCommands = (dir = "./commands/") => {
    fs.readdir(dir, (error, files) => { // Reading the Dir
        if (error) {
            console.log(error)
        }

        files.forEach((file) => { // reading Files from each dir
            if (fs.lstatSync(dir + file).isDirectory()) {
                loadCommands(dir + file + "/");
                return;
            }

            delete require.cache[require.resolve(`${dir}${file}`)];

            let props = require(`${dir}${file}`); // defining props for each file for each dir

            bot.commands.set(props.command.name, props); // giving name to the command

            if (props.command.aliases) props.command.aliases.forEach(alias => {
                bot.aliases.set(alias, props.command.name); // giving aliases to the command [second name]
            });
        });
    });
};
loadCommands();


/* --------------------------------------------------------------------------------------------------
                                        MESSAGE EVENT                                                 
   --------------------------------------------------------------------------------------------------
*/


bot.on("message", async message => {
    // Ignore bots.
    if (message.author.bot) return;
    // ignore DMs
    if (message.channel.type == "dm") return;

    /* --------------------------------------------------------------------------------------------------
                                            PREFIX DEFINED                                                 
       --------------------------------------------------------------------------------------------------
    */

    let prefixes = ['>>', 'alpha.', 'UwU', `<@${bot.user.id}> `];
    if (message.author.id === ("281667533453524994")) {
        prefixes = ['>>', 'alpha.', 'dev.', 'Sdev.', `<@${bot.user.id}> `];
    } else {
        prefixes = ['>>', 'alpha.', 'UwU', `<@${bot.user.id}> `];
    }
    let prefix = false;
    for (const thisPrefix of prefixes) {
        if (message.content.startsWith(thisPrefix)) prefix = thisPrefix;
    }



    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let command;

    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    } else if (!bot.commands.has(cmd)) {
        return;
    }


    if (!message.content.startsWith(prefix)) return;

    /* --------------------------------------------------------------------------------------------------
                                            RUNNING THE COMMAND                                                
       --------------------------------------------------------------------------------------------------
    */

    if (command) {
        if (!command.command.enabled) return;
    }
    try {
        command.run(bot, message, args);
        let CommandUsedEm = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setFooter(date.toLocaleDateString('eng-GB', options))
            .setDescription(`<@${message.author.id}> used \`${command.command.name}\` in <#${message.channel.id}>`)
            .setColor("#0078ff")
        if (message.author.id == JoeID || message.author.id == MarkID) {
            bot.channels.get("576113562481590273").send(CommandUsedEm).then((msg) => {
                msg.delete(10000)
            })
        } else {
            bot.channels.get("576113562481590273").send(CommandUsedEm)
        }


    } catch (e) {
        console.log(e)
    }


    /* --------------------------------------------------------------------------------------------------
                                            END OF MESSAGE EVENT                                                
       --------------------------------------------------------------------------------------------------
    */
});


/* --------------------------------------------------------------------------------------------------
                                        JOINING EVENT                                                 
   --------------------------------------------------------------------------------------------------
*/

bot.on("guildMemberAdd", member => {
    console.log("someone joined a server.");
    if(member.guild.id == "524971620016586753"){
    let welcomechannel = member.guild.channels.find(c => c.id === "524971620599857152");
    if (!welcomechannel) return;
    welcomechannel.send(`Welcome to Sparkle's Support server, <@${member.id}>! Enjoy your stay. Make sure to read <#524971728598728779>! Don't forget to wiggle by <#524972042626531328> to check our amazing partners (:\nDon't forget your :tropical_drink:!`);
    let UserJoinEm = new Discord.RichEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL)
        .setTitle("MEMBER JOINED!")
        .setFooter(`ID: ${member.id} || ${date.toLocaleDateString('eng-GB', options)}`)
        .setColor("#0078ff")
        .setDescription(`**Account created at: ${member.user.createdAt.toLocaleDateString('eng-GB', options)}**\nJoin Position: ${member.guild.members.size}`)
    bot.channels.get("576113562481590273").send(UserJoinEm)
    } else {
        return;
    }
});


/* --------------------------------------------------------------------------------------------------
                                        MESSAGE DELETE EVENT                                                 
   --------------------------------------------------------------------------------------------------
*/

bot.on('messageDelete', async (message) => {

    const entry = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    }).then(audit => audit.entries.first())
    let user;
    if (entry.extra.channel.id === message.channel.id && entry.target.id === message.author.id && entry.createdTimestamp > (Date.now() - 5000) && entry.extra.count >= 1) {
        user = entry.executor
    } else {
        // When all else fails, we can assume that the deleter is the author.
        user = message.author
    }

    if (user.id == bot.user.id) return;
    if(user.bot) return;

    let msgDeletedEm = new Discord.RichEmbed()
        .setAuthor(bot.users.get(user.id).tag, (bot.users.get(user.id).displayAvatarURL))
        .setThumbnail((bot.users.get(user.id).displayAvatarURL))
        .setDescription(`<@${user.id}> Deleted a message in <#${message.channel.id}>.`)
        .setTitle("MESSAGE DELETED!")
        .setFooter(`ID: ${user.id} || ${date.toLocaleDateString('eng-GB', options)}`)
        .setColor("#0078ff")
        .addField("Message", message.content)
        bot.channels.get("576113562481590273").send(msgDeletedEm)
})
    

/* --------------------------------------------------------------------------------------------------
                                        LOGGING IN                                                 
   --------------------------------------------------------------------------------------------------
*/

bot.login(process.env.BOT_TOKEN);
