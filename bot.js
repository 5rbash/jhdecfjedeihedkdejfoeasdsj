const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`on 15 servers | help$ | 5rbash bot#6984 .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
if (message.content === '$help') {
              var embed  = new Discord.RichEmbed()
                .addField("**BAN**" ,"**امر الباند** ``$ban <المستخدم>``")
                .addField("**KICK**" ,"**امر الكيك** ``$kick <المستخدم> ``")
                .addField("**ِAVATAR**" ,"**امر رؤية حساب شخص او حسابك** ``$avatar``")
                .addField("**ID**" ,"**امر معلومات عن حسابك ** ``$id``")
                .addField("**INVITE**" ," ``$invite <لأضافه البوت لأى سيرفر>``")
                .addField("**CLEAR**" ,"**امر مسح الشات:** ``$clear <العدد>``")
                .addField("**PING**", "**امر سرعة استجابةالبوت:** ``$ping``")
                .addField("**LOGIN**" , " تم اضافة خاصية التفعيل لطلب تشغيلها في السيرفر كلم المبيرمجين ")
                .addField("**SUPPORT**" ,"``$suppport <سيرفر دعم الفنى>``")
                .addField("**PING**", "** موقع البوت:** ``https://sites.google.com/view/bot5rbash/home``")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
  if(message.content === ('clear')) {
  let modRole = message.guild.roles.find("name", "Admin");
  if (!modRole) return message.reply('You do not have Admin Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});
client.on('message', msg => {
  if (msg.content === '$invite') {
    msg.reply('https://discordapp.com/api/oauth2/authorize?client_id=468978551710810112&permissions=0&scope=bot');
  }
});


client.on('message', message => {
if (message.content.startsWith("$kick")) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);

       
         return message.reply     
   ("تم أعطاء الكيك بنجاح "    );
  
};
});
client.on('message', msg => {
  if (msg.content === '$help') {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});
client.on("message", message => {
    var prefix = "$";
 
            var args = message.content.substring(prefix.length).split("$clear");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Name Bot."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
// Your Avatar URL!
client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', msg => {
  if (msg.content === '$suppport') {
    msg.reply('السيرفر للمساعده,https://discord.gg/ewCq8jt');
  }
});
client.on("message", message => {
      if (message.content === "$ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
    client.on('message', message => {
     if (message.content === "$id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Name Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
var prefix = "$";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "$say") {
   message.channel.sendMessage(args.join("  "))
  }
});
client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' Bye ..',
}}).catch(console.error);
  }
);

client.on('message', message => {
if (message.content.startsWith("$ban")) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);

       
         return message.reply     
   ("تم أعطاءالباند بنجاح "    );
  
};
});

client.on('message', message => {
if(message.content.startsWith(prefix +'$a8tra7')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      const A8tra7Room = message.guild.channels.find("name", "اسم الروم")
      if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   let a8tra7 = message.content.split(' ').slice(1).join(' ')
   var m8tr7 = message.author.id
if(!message.guild.channels.find("name","اسم الروم")) return message.channel.send('انشء روم باسم [اسم الروم]')
var Eror = new Discord.RichEmbed()
   .setTimestamp()
   .setDescription(`الرجاء كتابت إقتراحك بعد الأمر `)
   if(!a8tra7.join(" ")) return message.channel.send(Eror).then(message => {message.delete(50000)});
   var ThxForSug = new Discord.RichEmbed()
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`شكراً على اقتراحك !`)
.setDescription(`**Your Suggestion** : $a8tra7`)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
   .setTitle(`هل انت متأكد من ارسال الاقتراح؟ معك دقيقه قبل الالغاء`)
.setDescription(`Suggestion : **$a8tra7**`)
		 .setFooter('DK SUPPORT' , client.user.avatarURL)
message.channel.sendEmbed(Sure).then(msg => {
    msg.react('❎')
.then(() => msg.react('���'))

let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });

Yes.on("collect", r => {
   var ala8tra7 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
   .setTitle(`New Suggestion :bell:`)
   .setDescription(`From : __<@${m8tr7}>__\n\nSuggestion: **$a8tra7**`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   A8tra7Room.send(ala8tra7)
   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(6000)})
msg.delete();
})
No.on("collect", r => {
message.channel.send('تم الغاء اقتراحك بنجاح :white_check_mark: ').then(message => {message.delete(4000)})
msg.delete();
})
})
}
}); 

client.login("NDY4OTc4NTUxNzEwODEwMTEy.DjCa_Q.dvqOZsZxab7ztE2h71vRMqb_IBM");
