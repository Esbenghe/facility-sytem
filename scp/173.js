const Discord = require("discord.js")
module.exports = {
    scp: function(){
        const scp = new Discord.RichEmbed()
        .setAuthor("The Sculpture","http://pm1.narvii.com/6674/474457234ab1d8b62b5cd680a90db7a010fcd25b_00.jpg")
        .setTitle("SCP-173 | Euclid")
        .setDescription("Moved to Site-19 1993. Origin is as of yet unknown. It is constructed from concrete and rebar with traces of Krylon brand spray paint. SCP-173 is animate and extremely hostile. The object cannot move while within a direct line of sight. Line of sight must not be broken at any time with SCP-173. ")
        .setThumbnail("https://t7.rbxcdn.com/071f7f5ac423373937502504442e1d8e")
        .setColor(0xff0000)
        .setURL("http://www.scp-wiki.net/scp-173")
        return scp;
    }
}