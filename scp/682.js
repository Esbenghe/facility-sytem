const Discord = require("discord.js")
module.exports = {
    scp: function(){
        const scp = new Discord.RichEmbed()
        .setAuthor("Hard-to-Destroy Reptile","http://scp-wiki.wdfiles.com/local--files/scp-682/monster8editub9.jpg")
        .setTitle("SCP-682 | Keter")
        .setDescription("SCP-682, also known as \"Hard-To-Destroy Reptile,\" is a violent and hostile SCP, and the quaternary antagonist of SCP - Containment Breach. The large, reptile-like creature is described as one of the Foundation's most dangerous SCP objects.")
        .setThumbnail("https://i.imgur.com/kHsGMZE.jpg")
        .setColor(0x3F704D)
        .setURL("http://www.scp-wiki.net/scp-682")
        return scp;
    }
}