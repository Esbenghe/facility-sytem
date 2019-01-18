const Discord = require("discord.js")
module.exports = {
    scp: function(){
        const scp = new Discord.RichEmbed()
        .setAuthor("The Plague Doctor","https://a.wattpad.com/cover/96647974-352-k592109.jpg")
        .setTitle("SCP-049 | Euclid")
        .setDescription("SCP-049 is a humanoid entity, roughly 1.9 meters in height, which bears the appearance of a medieval plague doctor. While SCP-049 appears to be wearing the thick robes and the ceramic mask indicative of that profession, the garments instead seem to have grown out of SCP-049's body over time1, and are now nearly indistinguishable from whatever form is beneath them")
        .setThumbnail("http://scp-wiki.wdfiles.com/local--resized-images/scp-049/SCP-049/medium.jpg")
        .setColor(0x000000)
        .setURL("http://www.scp-wiki.net/scp-049")
        return scp;
    }
}