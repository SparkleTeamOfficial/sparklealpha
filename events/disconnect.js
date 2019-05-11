module.exports = async bot => {
    const {
        get
    } = require("snekfetch");
    await get(`http://artii.herokuapp.com/make?text=SPARKLEALPHA++DISCONNECTED&font=big`).then(res => {
       console.log(res.body.toString())
    });
const Discord = require('discord.js');
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var event = new Date();
let embed = new Discord.RichEmbed()
.setAuthor('Sparkle Alpha Disconnected!', 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png')
.setColor('0xDC143C')
.setThumbnail(bot.user.displayAvatarURL)
.setFooter(event.toLocaleDateString('eng-GB', options))
.setDescription('**WARNING TOKEN RESET, TELL THE DEVELOPERS ASAP.**')

bot.channels.get("534770706949341198").send(embed)
}