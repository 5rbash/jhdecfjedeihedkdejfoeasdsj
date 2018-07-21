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
                .addField("**LINKS**" ,":no_entry_sign: تم اضافه منع الروابط :no_entry_sign: ")
                .addField("__ء__" ," __لعرض اوامر الاداره    | اوامر اييداريه__")
                .addField("**قوانين**" ," **قوانين$    | لعرض قوانين السيرفر**")
                .addField("**BAN**" ," **$ban    | لحظر عضو**")
                .addField("**KICK**" ,"** $kick   | لإخراج عضو من السيرفر **")
                .addField("**ِAVATAR**" ,"**لا اخذ صورة شخص او لعرض صورتك:** ``$avatar``")
                .addField("**ID**" ,"**لعرض معلومات حسابك :** ``$id``")
                .addField("**INVITE**" ,"** ``$invite <لأضافه البوت لأى سيرفر>``")
                .addField("**CLEAR**" ,"**لمسح الشات** ``$clear <العدد>``")
                .addField("**PING**", "**لعرض سرعة النت** ``$ping``")
                .addField("__ء__" ," __لعرض اوامر الالعاب    | اوامر الالعاب__")
                .addField("****", "**$لعبةشعر** ``شعر``")
                .addField("****", "**$لعبه خواطر** ``خواطر``")
                .addField("****", "**$لعبه كت تويت** ``كت تويت``")
                .addField("**LOGIN**" , " تم اضافة خاصية التفعيل لطلب تشغيلها في السيرفر كلم المبيرمجين ")
				                .addField("**SUPPORT**" ,"** ``$suppport <سيرفر دعم الفنى>``")
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
    msg.reply('https://discordapp.com/oauth2/authorize?client_id=468978551710810112&permissions=0&scope=bot');
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
          text: "5rbash bot."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
// Your Avatar URL!
client.on('message', message => {
    if (message.content === "$Avatar") {
    message.reply(message.author.avatarURL); 
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
   message.channel.sendMessage(args.join("say"))
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

const cuttweet = [
    'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
    'كت تويت | الحرية لـ ... ؟',
    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
    'كت تويت ‏| كلمة للصُداع؟',
    'كت تويت ‏| ما الشيء الذي يُفارقك؟',
    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
    'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
    'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
    '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
    '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
    '‏كت تويت | وش يفسد الصداقة؟',
    '‏كت تويت | شخص لاترفض له طلبا ؟',
    '‏كت تويت | كم مره خسرت شخص تحبه؟.',
    '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
    '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
    '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
    '‏كت تويت |أقوى كذبة مشت عليك ؟',
    '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
    '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
    'كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
    '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
    '‏كت تويت | مطلبك الوحيد الحين ؟',
    '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content.startsWith("$كت تويت")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField(' كت تويت',
 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});

client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        'كيف يمكن اساعدك',
        ' ًمرحبا',
        'لا تزعجني',
        'ايش تبي ',
        'هلا',
        'كيفك',
        '?',
        'جرب $help'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});

client.on('message', message => {
            if (message.content.startsWith("$قوانين")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اولا** ' ,' **ممنوع السب** ')
.addField('     **ثانيا** ' ,' **لا تسوي سبام ** ')
.addField('     **ثالثا** ' ,' **لا تزعج الاخرين** ')
.addField('    **رابعا**' ,' **ممنوع الاعلانات** ')
.addField('    **خامسا**' ,' **احترم الاخرين** ')
.addField('    **سادسا**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **سابعا**' ,' **لا تنشر روابط!** ')
.addField('    **ثامنا**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **تاسعا**' ,' **لا تطلب رتبه الاداره !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("$خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField(' خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const Sra7a = [  ' يا صرخة إحساسي وخنقة دموعي إذا الصّدف جابت مكاني مكانه من داخلي إحساس يعلن خضوعي وفي ظاهري رجال حافظ كيانه',  ' ظامي الوجدان وأشواقك نهر اسقني من عذب معسول الغدير الرّموش السّود والطّرف الحور ليتها عن لحظها لي تستخير أول المشوار في حبّك قهر وآخر المشوار عمري به خطير',  ' حبيبي عادت أسراب الحمام وعادوا الغيّاب وأنا من كثر ما شفت الوجيه اشتقت لأحبابي حبيبي من كثر ما اشتقت لك صرت أكره الأبواب ليّا شفت الوصل، وأهل الوصل ما عتّبوا بابي',  ' أي سرّ يعتري شوقي إليك إنّ شوقي حائر في مقلتيك كلّنا أسرى صبابات الهوى فادنُ منّي إنّني ملك يديك',  ' إِن الغرورَ إِذا تملَّكَ أمّةً كالزّهرِ يخفي الموتَ وهو زؤامُ',  ' إِذا عصفَ الغرورُ برأسِ غِرٍّ توّهمَ أن منكبَهُ جَناحُ',  ' أيّهذا الشّاكي و ما بك داء كن جميلاً ترى الوجود جميلا',  ' في هذه البقاع القصيّة هذه البقاع المهجورة حتى من عواء الذئب أسرجُ ضوء الشّمعة وأسافر',  ' يا نفسُ صَبْراً على ما قد مَنّيتِ به فالحرُّ يصبرُ عند الحادثِ الجَلَلِ',  ' وحسبُ الفتى إِن لمْ ينلْ ما يريدُه مع الصّبرِ أن يُلفى مقيماً على الصّبر',  '‏ صَبْراً جميلاً على مانابَ من حَدَثٍ والصبرُ ينفعُ أحياناً إِذا صبروا الصّبرُ أفضلُ شيءٍ تستعينُ به على الزّمانِ إِذا ما مسَّكَ الضّررُ',]
client.on('message', message => {
if (message.content.startsWith('$شعر')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("شعر..")
.setColor('#FF0000')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/442659848019116032/443844544308576266/unknown.png")
               .setTimestamp()
        console.log("By : |!PL~ℳ𝓸𝓓𝓶ℛ ᴿ⁷#7565");
message.channel.sendEmbed(client);
message.react("??")
}
}); 

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg/')){
        message.delete()
    return message.reply(`**يمنع نشر روابط الدسكورد في السيرفر هنا **`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube.com/')){
        message.delete()
    return message.reply(`**يمنع نشر روابط اليوتيوب هنا **`)
    }
});

const discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');

const yt_api_key = "v2Dn_c7D5b1_9TIm7acO-0iKxdjeFgQI";
const prefix = '+';
const discord_token = "NDY4OTc4NTUxNzEwODEwMTEy.DjS78A.RGZVOJzakCQAubWPFiu2_KNj-Yw";
client.login(discord_token);
client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
*/
client.on('ready', () => {});
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

client.on('message', function(message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');

    if (mess.startsWith(prefix + '$play')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        // if user is not insert the URL or song title
        if (args.length == 0) {
            let play_info = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
                .setDescription('**قم بإدراج رابط او اسم الأغنيه**')
            message.channel.sendEmbed(play_info)
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
                          ${videoInfo.title}
                          **`)
                        .setColor("#a637f9")
                        .setFooter('|| ' + message.author.tag)
                        .setThumbnail(videoInfo.thumbnailUrl)
                    message.channel.sendEmbed(play_info);
                    queueNames.push(videoInfo.title);
                    now_playing.push(videoInfo.title);

                });
            });
        }
        else {

            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('__**تم التشغيل ✅**__', `**${videoInfo.title}
                              **`)
                        .setColor("RANDOM")
                        .addField(`بواسطه`, message.author.username)
                        .setThumbnail(videoInfo.thumbnailUrl)

                    // .setDescription('?')
                    message.channel.sendEmbed(play_info)
                    message.channel.send(`
                            **${videoInfo.title}** تم تشغيل `)
                    // client.user.setGame(videoInfo.title,'https://www.twitch.tv/Abdulmohsen');
                });
            });
        }
    }
    else if (mess.startsWith(prefix + 'skip')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send('`✔`').then(() => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        });
    }
    else if (message.content.startsWith(prefix + 'vol')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        // console.log(args)
        if (args > 100) return message.channel.send('1 - 100 || **__لا أكثر ولا أقل__**')
        if (args < 1) return message.channel.send('1 - 100 || **__لا أكثر ولا أقل__**')
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`**__ ${dispatcher.volume*50}% مستوى الصوت __**`);
    }
    else if (mess.startsWith(prefix + 'pause')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send('`✔`').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'ok')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
            message.channel.send('`✔`').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'stop')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send('`✔`');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
    else if (mess.startsWith(prefix + 'تعال')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.member.voiceChannel.join().then(message.channel.send(':ok:'));
    }
    else if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        if (isPlaying == false) return message.channel.send(':anger: || **__تم التوقيف__**');
        let playing_now_info = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
                  ${videoInfo.title}
                  **`)
            .setColor("RANDOM")
            .setFooter('طلب بواسطة: ' + message.author.tag)
            .setThumbnail(videoInfo.thumbnailUrl)
        //.setDescription('?')
        message.channel.sendEmbed(playing_now_info);
    }
});

function skip_song(message) {
    if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
    dispatcher.end();
}

function playMusic(id, message) {
    voiceChannel = message.member.voiceChannel;


    voiceChannel.join().then(function(connectoin) {
        let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
            filter: 'audioonly'
        });
        skipReq = 0;
        skippers = [];

        dispatcher = connectoin.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            queue.shift();
            queueNames.shift();
            if (queue.length === 0) {
                queue = [];
                queueNames = [];
                isPlaying = false;
            }
            else {
                setTimeout(function() {
                    playMusic(queue[0], message);
                }, 500);
            }
        });
    });
}

function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYoutubeID(str));
    }
    else {
        search_video(str, function(id) {
            cb(id);
        });
    }
}

function add_to_queue(strID) {
    if (isYoutube(strID)) {
        queue.push(getYoutubeID(strID));
    }
    else {
        queue.push(strID);
    }
}

function search_video(query, cb) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        cb(json.items[0].id.videoId);
    });
}


function isYoutube(str) {
    return str.toLowerCase().indexOf('youtube.com') > -1;
}
 client.on('message', message => {
     if (message.content === prefix +"help") {
    const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`Zyad,aLmutairi commands:

+about - shows info about the bot
+ping - checks the bot's latency

  Music:

+play - shows the song that is currently playing
+play <title|URL|subcommand> - plays the provided song
+queue [pagenum] - shows the current queue
+تعال <title|URL|subcommand> - plays the provided song
+skip - votes to skip the current song

  DJ:
+ok <title|URL|subcommand> - plays the provided song
+skip - skips the current song
+pause - pauses the current song
+skipt <position> - skips to the specified song
+stop - stops the current song and clears the queue
+vol [0-150] - sets or shows volume

For additional help,  `)

      message.channel.send({embed});
     }
    });
	client.on('message', message => {
    if (message.content.startsWith("habout")) {
      message.channel.send({
 embed: new Discord.RichEmbed() 
    .setColor('RED')
    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
     })
    }
  });
  client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('hping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });

client.login("NDY4OTc4NTUxNzEwODEwMTEy.DjS7Nw.Itp-I6kvRuFC-ScM7h-ow0MFF28");
