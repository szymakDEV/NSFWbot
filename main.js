const Discord = require("discord.js")
const prefix = "-"

const bot = new Discord.Client({ disableEveryone: true })

bot.on("ready", async() => {
    console.log(`Calmy is ready!`)
    
    bot.user.setActivity("Calmy BETA v1.0", {
  type: "WATCHING"

});
});

bot.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()

    if (command == "commands") {
        var countdownEmbed = new Discord.MessageEmbed()
            .setColor(`#33b51f`)
            .setDescription(`<a:success:831939320235425813> Command loaded`)




        var countdownEmbed2 = new Discord.MessageEmbed()
            .setTitle(`Error`)
            .setDescription(`<:toggleoff:831937210197868614> This command is not available!`)

        .setThumbnail(bot.user.avatarURL)
            .setFooter(`Triggered by: ${message.author.username}`)

        message.channel.send({ embed: countdownEmbed }).then((msg) => {
            setTimeout(function() {
                msg.edit(countdownEmbed2);
            }, 1000)
        })
    }
    
if (command == "staff") {
    var embed = new Discord.MessageEmbed()
    .setTitle('Error')
    .setDescription(`<:toggleoff:831937210197868614> This command is not available!`)
    
    
    .setThumbnail(bot.user.avatarURL)
            .setFooter(`Triggered by: ${message.author.username}`)
    message.channel.send(embed)
    }
    
 if (command == "help.moderation") {
    var embed = new Discord.MessageEmbed()
    .setTitle('Error')
    .setDescription(`<:toggleoff:831937210197868614> This command is not available!`)
	    
    message.channel.send(embed)
         }
    
     if (command == "kids") {
    var embed = new Discord.MessageEmbed()
    .setColor(`#b51f1f`)
    .setTitle('<a:FBI:831941674090758154>')
    .setDescription(`FBI is coming to you...`)
	    
    message.channel.send(embed)
  	}
    
         if (command == "girl") {
    var embed = new Discord.MessageEmbed()
    .setImage('http://nsfw-gif.net/wp-content/uploads/2019/11/KendraSunderland-sfwgif-naturalbigtits-porn-animatedbigbreasts.gif')
	    
    message.channel.send(embed)
  	}
    
    if (command == "fuck") {
        var embed = new Discord.MessageEmbed()
        .setImage('http://nsfw-gif.net/wp-content/uploads/2019/11/LiyaSilver-fuckinghardcore-naturalbigtits-ddfnetworkarmy-ridingcock.gif')
        
        message.channel.send(embed)
    }
    
    if (command == "faketaxi") {
        var embed = new Discord.MessageEmbed()
        .setImage('http://nsfw-gif.net/wp-content/uploads/2019/11/dylannvox-fuckingbigtits-hardcoreporn-doggystyle-fuck.gif')
        
        message.channel.send(embed)
    }
    
    if(command == "blowjob") {
        var embed = new Discord.MessageEmbed()
        .setImage('http://nsfw-gif.net/wp-content/uploads/2019/10/GabbieCarter-naturalbigtits-teensex-pornstar-suckingcock.gif')	
        
        message.channel.send(embed)
    }
    
    if(command == "help.nsfw") {
        var embed = new Discord.MessageEmbed()
        .setTitle('NSFW commands')
        .setDescription("```-fuck```\n\n```-girl```\n\n```-blowjob```\n\n```-faketaxi```\n\n```-kids```")
        
        message.channel.send(embed)
    }
});

bot.login('ODI4MjM2ODM4OTIwNTE5NzUw.YGmpqg.QHl08p-NxDWyGikJCNdRyltVGlw')