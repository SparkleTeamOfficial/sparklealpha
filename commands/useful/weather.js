const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (bot, message, args) => {
  let location = args.join(" ");
  if (!args[0]) {
    message.channel.send('⛔ **Incorrect format.**\n`>weather SOMEWHERE`')
    return;
  }
  weather.find({
    search: location,
    degreeType: 'C'
  }, function (err, result) {
    if (err) {
      console.log(err);
      message.channel.send('There has been an error, make sure your input is correct ♥');
      return;
    } else {
      let thumbnail;
      if (JSON.stringify(result[0].current.skytext).slice(1, -1) == "Sunny") {
        thumbnail = "https://static1.squarespace.com/static/56c5082327d4bdbfed3e08df/595ea35f1e5b6cee7b594b4c/595ea3fc1b631ba0d19b4568/1499374598749/WeatherIconsMonoline_Sunny.gif";
      } else if (JSON.stringify(result[0].current.skytext).slice(1, -1) == "Cloudy") {
        thumbnail = "https://static1.squarespace.com/static/56c5082327d4bdbfed3e08df/595ea35f1e5b6cee7b594b4c/595ea36703596e2d3823e795/1499374445624/WeatherIconsMonoline_Cloudy.gif";
      } else if (JSON.stringify(result[0].current.skytext).slice(1, -1) == "Rainy") {
        thumbnail = "https://static1.squarespace.com/static/56c5082327d4bdbfed3e08df/595ea35f1e5b6cee7b594b4c/595ea3d746c3c454c2460956/1499374560551/WeatherIconsMonolin_Showers-Drizzle-3.gif";
      } else if (JSON.stringify(result[0].current.skytext).slice(1, -1).has("Rain")) {
        thumbnail = "https://static1.squarespace.com/static/56c5082327d4bdbfed3e08df/595ea35f1e5b6cee7b594b4c/595ea3cf5016e1f4ba325b2d/1499374551588/WeatherIconsMonoline_Rain.gif";
      } else if (JSON.stringify(result[0].current.skytext).slice(1, -1).has("cloudy")) {
        thumbnail = "https://static1.squarespace.com/static/56c5082327d4bdbfed3e08df/595ea35f1e5b6cee7b594b4c/595ea36703596e2d3823e795/1499374445624/WeatherIconsMonoline_Cloudy.gif";
      } else if (JSON.stringify(result[0].current.skytext).slice(1, -1) == "Rain Showers") {
        thumbnail = "https://static1.squarespace.com/static/56c5082327d4bdbfed3e08df/595ea35f1e5b6cee7b594b4c/595ea3cf5016e1f4ba325b2d/1499374551588/WeatherIconsMonoline_Rain.gif";
      } else if (JSON.stringify(result[0].current.skytext).slice(1, -1) == "Snowing") {
        thumbnail = "https://static1.squarespace.com/static/56c5082327d4bdbfed3e08df/595ea35f1e5b6cee7b594b4c/595ea3f4db29d69f1e4dae8c/1499374591126/WeatherIconsMonoline_Snow.gif";
      } else if (JSON.stringify(result[0].current.skytext).slice(1, -1) == "Snowy") {
        thumbnail = "https://static1.squarespace.com/static/56c5082327d4bdbfed3e08df/595ea35f1e5b6cee7b594b4c/595ea3f4db29d69f1e4dae8c/1499374591126/WeatherIconsMonoline_Snow.gif";
      } else {
        thumbnail = "https://i.stack.imgur.com/Vkq2a.png"
      }
      const embed = new Discord.RichEmbed()
        .setThumbnail(thumbnail)
        .setAuthor(JSON.stringify(result[0].location.name).slice(1, -1), message.author.displayAvatarURL)
        .setDescription(`<:temperature:525459319081402419> **Temperature:** ${JSON.stringify(result[0].current.temperature).slice(1,-1)}°C\n<:humidity2:525458105795084322> **Humidity:** ${JSON.stringify(result[0].current.humidity).slice(1,-1)}.\n<:wind:525458655340920832> **Wind:** ${JSON.stringify(result[0].current.winddisplay).slice(1,-1)}\n• **Feels like:** ${JSON.stringify(result[0].current.feelslike).slice(1,-1)}°C\n• **State:** ${JSON.stringify(result[0].current.skytext).slice(1,-1)}`)
        .setFooter(`Date:  ${JSON.stringify(result[0].current.date).slice(1,-1)} || Type: Celsius.`)
      message.channel.send("Squeezing Information...").then((msg) => {
        msg.edit(embed);
      });
    }
  });
}
module.exports.command = {
    name: 'weather',
    aliases: ["temperature", "temp"],
    usable: "Users",
    description: "Checks the weather in the desired city.",
    usage: ">weather <CITY>",
    category: "Useful",
    enabled: true
};