/**
 * Modules
 */
const Discord = require("discord.js");
const dl = require("discord-leveling")
const client = new Discord.Client({disableEveryone:true})
/**
 * Json
 */
const setup = {
    "prefix":"#",
    "token":"NTMzMjc5MDYxMDQxMjE3NTM4.DxougA.dpUly9k0kdmwRiz7r2u3NLI5PIU",
    "clientid":"533279061041217538",
    "clientsecret":"D2Y91h34yGM5ZTeYAG7_BDFeWDJTvqEm"
}
/**
 * Log in
 */
client.login(setup.token);
/**
 * Ready Event
 */
client.on("ready",()=>{
    console.log(`${client.user.username} is on and ready on server ${client.guilds.get("495267425848393729").name} with ${client.guilds.get("495267425848393729").memberCount} users`)
})
/**
 * New User Event
 */
client.on("guildMemberAdd", async member =>{
    dl.SetLevel(member.id, 0)
    dl.SetXp(member.id, 0)
    const channel = member.guild.channels.get("495267425848393731")
    const welcome = new Discord.RichEmbed()
        .setAuthor(`Welcome ${member.user.username}`,member.user.avatarURL)
        .setDescription(`You are member nr. ${member.guild.memberCount}`)
    channel.send(welcome)
})
/**
 * Message Event
 */
client.on("message", async (message) =>{
    const prefix = setup.prefix
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
    /**
     * Add XP per message
     */
    var profile = await dl.Fetch(message.author.id)
    dl.AddXp(message.author.id,10)
    dl.AddLevel(message.author.id,2)
    /**
     * Help Command
     */
    if(command === "help"){
        const help = new Discord.RichEmbed()
        .setColor(0x000000)
        .setTitle("Commands for " + message.guild.name)
        .setDescription(`STAFF
        -1||#send||: __#send (channel) (message)__
        -2||#delete||: __#delete (user)__

        UTILITY
        -1||#report||: __#report (user) (reason)__
        
        ECONOMY
        -1||#profile||: __#profile | check your server profile__
        -3||#delete||: __#delete (user)__
        
        FUN
        -1||#scp||: __#spc (number)__`)
        return message.channel.send(help)
    }
    /**
     * SCP command
     */
    if (command === "scp"){
        const scp = require(`./scp/${args[0]}`)
        message.channel.send(scp.scp())
    }
    /**
     * Delete Command
     */
    if (command === "delete"){
        if(message.guild.me.hasPermission("ADMINISTRATOR")){
            var user = message.mentions.users.first().id
            if (!user) return message.reply('Pls, Specify a user I have to delete in my database!')
            var output = await dl.Delete(user)
            if (output.deleted == true) return message.reply('Succesfully deleted the SCP out of the database!')
            message.reply('Error: Could not find the user in database.')
        }else{
            message.channel.send("Only personel with rank 10+ are allowed to execute this command")
        }
    }
    /**
     * Profile Command
     */
    if (command === 'profile') {
        var user = message.author
        var output = await dl.Fetch(user.id)
        const recruit = new Discord.RichEmbed()
        .setAuthor(`Personel Card - ${user.discriminator}`,"https://en.tankiwiki.com/images/en/thumb/5/51/IconsPremium_01.png/30px-IconsPremium_01.png")
        .setThumbnail(user.avatarURL)
        .addField(`XP`,`${output.xp}/100`,true)
        .addField(`Money`,`💎${output.level}`,true)
        .addField("Name:",user.username,true)
        .addField("Rank:","Recruit",true)
        .setColor(0x000000);
        const private = new Discord.RichEmbed()
        .setAuthor(`Personel Card - ${user.discriminator}`,"https://en.tankiwiki.com/images/en/thumb/9/91/IconsNormal_02.png/25px-IconsNormal_02.png")
        .setThumbnail(user.avatarURL)
        .addField(`XP`,`${output.xp}/500`,true)
        .addField(`Money`,`<:note:533402969949995009>${output.level}`,true)
        .addField("Name:",user.username,true)
        .addField("Rank:","Private",true)
        .setColor(0x000000);
        const gefreiter = new Discord.RichEmbed()
        .setAuthor(`Personel Card - ${user.discriminator}`,"https://en.tankiwiki.com/images/en/thumb/2/20/IconsNormal_03.png/25px-IconsNormal_03.png")
        .setThumbnail(user.avatarURL)
        .addField(`XP`,`${output.xp}/1500`,true)
        .addField(`Money`,`<:note:533402969949995009>${output.level}`,true)
        .addField("Name:",user.username,true)
        .addField("Rank:","Gefreiter",true)
        .setColor(0x000000);
        const corporal = new Discord.RichEmbed()
        .setAuthor(`Personel Card - ${user.discriminator}`,"https://en.tankiwiki.com/images/en/thumb/d/d6/IconsNormal_04.png/25px-IconsNormal_04.png")
        .setThumbnail(user.avatarURL)
        .addField(`XP`,`${output.xp}/3700`,true)
        .addField(`Money`,`<:note:533402969949995009>${output.level}`,true)
        .addField("Name:",user.username,true)
        .addField("Rank:","Corporal",true)
        .setColor(0x000000);
        if(profile.xp < 100){
            message.channel.send(recruit)
        }else{
        if(profile.xp > 100 && profile.xp < 500){
            message.channel.send(private)
        }else{
        if(profile.xp > 500 && profile.xp < 1500){
            message.channel.send(gefreiter)
        }else{
        if(profile.xp > 1500){
            message.channel.send(corporal)
        }
        }
        }
        }
    }
    /**
     * Eval Command
     */
    if(command === "eval"){
        if(message.member.id === "523020322333523968"){
            try {
                const code = args.join(" ");
                let evaled = eval(code);
                if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
                message.channel.send(clean(evaled), {code:"xl"});
            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        }
    }
    /**
     * Send Command
     */
    if(command === "send"){
        if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send(":no_entry:Only personel of rank 10 are allowed to use this command")
        const channel = message.mentions.channels.first()
        const reply = args.slice(1).join(" ")
        return channel.send(reply)
    }
    /**
     * Report Command
     */
    if(command === "report"){
        const council = message.guild.channels.get("530326284757106697")
        const channel = message.channel
        const text = args.join(" ")
        const report = new Discord.RichEmbed()
        .setThumbnail(client.user.avatarURL)
        .setAuthor(`Report by ${message.member.user.tag}`,message.member.user.avatarURL)
        .setDescription(text)
        .setTimestamp()
        .setColor(0x000000)
        .setFooter(`#${channel.name}`)
        council.send("<@&524583017327362068>")
        council.send(report)
        return message.delete()
    }
/**
 * Message Delete Event
 */
})
client.on("messageDelete", async text=>{
    const author = text.author
    const channel = text.channel
    const content = text.content
    const logs = text.guild.channels.get("533632415491424316")
    const report = new Discord.RichEmbed()
    .setDescription(content)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/en/0/0a/Logo_of_the_SCP_Foundation.png")
    .setColor(0xff0000)
    .setFooter(author.tag + " | " + author.id + " | #" + channel.name)
    logs.send(report)
})