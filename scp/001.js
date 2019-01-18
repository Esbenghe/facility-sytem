const Discord = require("discord.js")
module.exports = {
    scp: function(){
        const scp = new Discord.RichEmbed()
        .setAuthor("The Gate Guardian","http://pm1.narvii.com/6674/474457234ab1d8b62b5cd680a90db7a010fcd25b_00.jpg")
        .setTitle("SCP-001 | Keter")
        .setDescription("SCP-001 is a humanoid entity, approximately seven hundred (700) cubits in height, located in an undisclosed location near the intersection of the Tigris and Euphrates rivers.")
        .setThumbnail("http://scp-wiki.wdfiles.com/local--files/dr-clef-s-proposal/Angel.jpg")
        .setColor(0xff0000)
        .setURL("http://www.scp-wiki.net/dr-clef-s-proposal")
        return scp;
    }
}