module.exports = bot => {
const Discord = require('discord.js');
 var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var event = new Date();

    let erroroutboi;
if(console.error().length >= 2000){
erroroutboi = console.error().slice(0,500);
} else {
erroroutboi = console.error();
}
    let embed = new Discord.RichEmbed()
    .setAuthor('Sparkle ERROR!',`http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png`)
    .setColor("0xDC143C")
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription("Error Occured! Check Console")
    .setFooter(event.toLocaleDateString('eng-GB', options))
    bot.channels.get('576113562481590273').send(embed)
console.error();
};