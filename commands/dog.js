const Discord = require("discord.js");
const { get } = require("snekfetch");  

module.exports.run = async (bot,message,args) => {
        try {
             await get('https://nekos.life/api/v2/img/woof').then(res => {
                const embed = new Discord.RichEmbed()
                .setImage(res.body.url)
                .setColor("#fea5ff")
                .setAuthor("Woof! big and small doggos on the way!")
    
                setTimeout(() => {
                    return  message.channel.send({embed});
                }, 100);
            });
        } catch(err) {
            console.log(err);
        }
    }

module.exports.command = {
name: 'dog',
aliases: ["woof"],
usable: "Users",
description: "Send a picture of a dog.",
usage: ">dog",
category: "Image",
enabled: true
};