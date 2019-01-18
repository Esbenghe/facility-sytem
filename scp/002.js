const Discord = require("discord.js")
module.exports = {
    scp: function(){
        const scp = new Discord.RichEmbed()
        .setAuthor("The Living Room","https://steamuserimages-a.akamaihd.net/ugc/180542583655596664/28E5201CB0D3C4BD0F898D7D7EF0B6903CD7EE37/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true")
        .setTitle("SCP-002 | Euclid")
        .setDescription("SCP-002 resembles a tumorous, fleshy growth with a volume of roughly 60 m³ (or 2000 ft³). An iron valve hatch on one side leads to its interior, which appears to be a standard low-rent apartment of modest size. One wall of the room possesses a single window, though no such opening is visible from the exterior.")
        .setThumbnail("http://scp-wiki.wdfiles.com/local--files/scp-002/800px-SCP002.jpg")
        .setColor(0xCCCCCC)
        .setURL("http://www.scp-wiki.net/scp-002")
        return scp;
    }
}