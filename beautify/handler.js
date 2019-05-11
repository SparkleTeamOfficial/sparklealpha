const reqEvent = (event) => require(`./${event}`);

module.exports = bot => {
    bot.on("ready", function() {reqEvent("ready") (bot) });
    bot.on("reconnecting", () => reqEvent("reconnecting") (bot));
    bot.on("disconnect", () => reqEvent("disconnect") (bot));
    bot.on("error", reqEvent("throw"));
}