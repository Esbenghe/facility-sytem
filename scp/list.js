const Discord = require("discord.js")
module.exports = {
    scp: function(){
        const scp = new Discord.RichEmbed()
        .setAuthor("SCP list","https://vignette.wikia.nocookie.net/containmentbreach/images/f/fc/Scpkawai5.png/revision/latest?cb=20180307175329")
        .setDescription(`
        001 - 173 - 682
        002
        049`)
        .setThumbnail("http://i.imgur.com/5RmcSmG.jpg")
        .setColor(0x000000)
        return scp;
    }
}