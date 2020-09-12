const Discord = require('discord.js')
const client = new Discord.Client();
// توكن البوت
var token = "NzQwNjQzNjgzNDU1NDY3NTIw.XysALg.Y12v3MqASQ_-r1hn6S5waxAewho";
// الاختصار المستخدم في الاوامر
const prefix = "-";
// نشاط البوت
var activity = prefix + "-";
// حالة البوت
var status = "dnd";
/**
* @param {Discord.Message} message The received message
*/
async function onMessage(message)
{
	try
	{
		if (message.content.startsWith(prefix))
		{
			var arg_index = message.content.indexOf(' ');
			var command = message.content.slice(prefix.length);
			if(arg_index > 0) // != -1
				command = command.substr(0, arg_index - 1);
			const text = message.content.substr(arg_index + 1);
			switch(command)
			{
			case "help":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						
						message.reply(" **تم ارسال الرسالة ف الخاص بنجاح**  :hearts::white_check_mark: ");
					}
					else
					{
						message.reply("Help coming right away...");
						message.author.send().catch(() =>
						{
							message.reply("I couldn't send a direct message to you.. so I'll send you help here.")
							message.channel.areply("I couldn't send a direct message to you.. so I'll send you help here.")
						});
			

			}
				break;
				case "bc":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						message.reply('Copy that!');
						let members = await message.guild.members.fetch();
						var sentsuccess = 0;
						var bots = 0;
						var msg = "";
						members.forEach(member =>
						{
							try
							{
								if(!member.user.bot)
								{
									++sentsuccess;
									member.send(text).catch(() =>
									{
										//console.log("Couldn't send message to " + member.displayName);
										//msg += member.displayName;
										//message.channel.send(member.displayName);
										--sentsuccess;
									})(sentsuccess);
								}
								else
									++bots;
							}catch(exception)
							{
								console.log(exception);
							}
						});
						message.channel.send("Done, sir. Sent " + sentsuccess + "/" + (message.guild.memberCount - bots) + ".");
					}
					else
					{
						message.reply("Sorry, you're not allowed to command me that.");
					}
				break;
				case 'play':
				break;
			}
		}
	}catch(exception)
	{
		console.log("Exception Handled " + exception);
		message.channel.send("**Exception Handled**\n```js" + exception + "```");
	}
}
function onClientReady()
{
	console.log('Ready!');
	// Set the client user's presence
	client.user.setPresence({ activity: { name: activity }, status: status }).then(console.log).catch(console.error);
}
// Events
//---------------------------------
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "help")) {
    if (message.author.id == message.guild.ownerID) {
      message.author
        .send(
          `   
\`الاوامر العامة\` :postbox:
\`${prefix}bot\` : لعرض معلومات عن البوت 
\`${prefix}user\` : لعرض معلومات عنك 
\`${prefix}avt\` :يعرض لك صورت  اي شخص عن طريق الايدي 
\`${prefix}avatar\` : لعرض صورتك أو صورة الي تمنشنه 
\`${prefix}color\` : لأختيار لونك في السيرفر 
\`${prefix}colors\` : غير لونك 
\`${prefix}inf\` : عدد الدعوات للسيرفر
\`${prefix}رابط\` : اكتب رابط بالشات يجيك رابط السيرفر خاص

\`الاوامر الإدارية\` :stars:
\`${prefix}clear\` : لمسح الشات 
\`${prefix}ban\` : لحظر شخص من السيرفر
\`${prefix}kick\` : لطرد شخص من السيرفر
\`${prefix}open\` : لفتح الشات
\`${prefix}close\` : لقفل الشات 
\`${prefix}mute\` : لإسكات شخص
\`${prefix}unmute\` : لـ فك إسكات شخص
\`${prefix}new\` : فتح التكت
\`${prefix}closet\` : لحذف روم التكت
\`${prefix}say\` : البوت يكرر كلامك
\`${prefix}move\` : لسحب الشخص الى روومك
\`${prefix}reply\` : لصنع رد تلقائي
\`${prefix}setLog\` : لتحديد روم السجلات 
\`${prefix}setby\` : تحديد روم المغادرة
\`${prefix}setWelcomer <channel name>\` : لتحديد روم الولكم 
\`${prefix}setMessage\` : لتحديد رسالة الترحيب 
\`${prefix}setVc\` <channel name> : لتحديد روم الفويس اونلاين 
\`${prefix}vc off\` : لإغلاق روم الفويس اونلاين
\`${prefix}ls\` : لإظهار جميع بوتات السيرفر
\`${prefix}role\` : لاعطاء شخص رتبة
\`${prefix}role all\` : لـ إعطاء الجميع رتبة معينة

\`\`اوامر التقديم\`\` :pencil: 
\`${prefix}room1\` : لعمل روم التقديمات
\`${prefix}room2\` : لعمل روم القبول والرفض
\`لقبول تقديم عضو : \`${prefix}قبول
مثال: \`\`${prefix}قبول @منشن عضو \`\`
لرفض عضو : ${prefix}رفض
مثال: \`\`${prefix}رفض @منشن عضو لست متفاعل بشكل كافِ\`\`

  `
        )
        .then(() => {
          message.author.send(`

\`أوامر الكريدت\` :credit_card: 
\`${prefix}credits\` : لمعرفة رصيدك  
\`${prefix}daily\` : لأخذ جائزة يومية
\`يمكن التحويل من شخص لشخص + يزيد الكريدت فقط من امر دايلي\`

\`أوامر الموسيقى \` :notes:
\`${prefix}Play\` : تشغيل الاغنية او اضافتها للقائمة او اكمال الاغنية [p]
\`${prefix}Pause\` : ايقاف مؤقت الاغنية
\`${prefix}Resume\` : اكمال الاغنية 
\`${prefix}stop\` : لأيقاف الأغنية وخروج البوت من الروم
\`${prefix}forceskip\` : لتخطي الأغنية بشكل مباشر
\`${prefix}Queue\` : عرض القائمة 
\`${prefix}skipto\` : لتخطي الأغنية الى الأغنية القادمة في طابور الموسيقى القادمة
\`${prefix}Skip\` : تخطي للاغنية التالية 
\`${prefix}Volume\` : تغيير الصوت [vol] 
\`${prefix}np\` : عرض مايتم تشغيله الان [np] 
\`${prefix}repeat\` : تكرار الاغنية 

\`أوامر الحماية\` :closed_lock_with_key:
\`${prefix}settings limitsban\` : تحدد العدد الي تبيه لو حد بند  البوت يبنده 
\`${prefix}settings limitskick\` : تحدد العدد الي تبيه لو حد طرد 3 او 4 البوت يبنده 
\`${prefix}settings limitsroleD\` : تحدد العدد الي تبيه لو حد مسح رول 3 او 4 البوت يبنده 
\`${prefix}settings limitsroleC\` : تحدد العدد الي تبيه لو حد صنع روم 3 او 4 البوت يبنده 
\`${prefix}settings limitschannelD\` : تحدد العدد الي تبيه لو حد مسح روم 3 او 4 البوت يبنده 
\`${prefix}settings limitstime\` : تحديد الوقت الذي من خلالة يتم التبنيد كـ مثال اذا شخص بند 5 في دقيقة البوت يبنده
\`${prefix}antibots on\` : منع دخول بوتات
\`${prefix}antibots off\` : السماح للبوتات بالدخول
\`شرح البوت \` : <https://youtu.be/6B9nrQp02Rk>
`);
        })
        .then(e => {
          message.react("✅");
        })
        .catch(() => {
          return message.channel
            .send(
              "**يجب السماح بأستقبال الرسائل في الخاص ، لأتمكن من ارسال الاوامر لك **"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    } else {
      message.author
        .send(
          `   
\`الاوامر العامة\` :postbox:
\`${prefix}bot\` : لعرض معلومات عن البوت 
\`${prefix}user\` : لعرض معلومات عنك 
\`${prefix}avt\` :يعرض لك صورت  اي شخص عن طريق الايدي
\`${prefix}avatar\` : لعرض صورتك أو صورة الي تمنشنه 
\`${prefix}color\` : لأختيار لونك في السيرفر 
\`${prefix}colors\` : غير لونك 
\`${prefix}inf\` : عدد الدعوات للسيرفر
\`${prefix}رابط\` : اكتب رابط بالشات يجيك رابط السيرفر خاص

\`الاوامر الإدارية\` :stars:
\`${prefix}clear\` : لمسح الشات 
\`${prefix}ban\` : لحظر شخص من السيرفر
\`${prefix}kick\` : لطرد شخص من السيرفر
\`${prefix}open\` : لفتح الشات
\`${prefix}close\` : لقفل الشات 
\`${prefix}mute\` : لإسكات شخص
\`${prefix}unmute\` : لـ فك إسكات شخص
\`${prefix}new\` : فتح التكت
\`${prefix}closet\` : لحذف روم التكت
\`${prefix}say\` : البوت يكرر كلامك
\`${prefix}move\` : لسحب الشخص الى روومك
\`${prefix}reply\` : لصنع رد تلقائي
\`${prefix}setLog\` : لتحديد روم السجلات 
\`${prefix}setby\` : تحديد روم المغادرة
\`${prefix}setWelcomer <channel name>\` : لتحديد روم الولكم 
\`${prefix}setMessage\` : لتحديد رسالة الترحيب 
\`${prefix}setVc\` <channel name> : لتحديد روم الفويس اونلاين 
\`${prefix}vc off\` : لإغلاق روم الفويس اونلاين
\`${prefix}ls\` : لإظهار جميع بوتات السيرفر
\`${prefix}role\` : لاعطاء شخص رتبة
\`${prefix}role all\` : لـ إعطاء الجميع رتبة معينة

\`\`اوامر التقديم\`\` :pencil: 
\`${prefix}room1\` : لعمل روم التقديمات
\`${prefix}room2\` : لعمل روم القبول والرفض
\`${prefix}لقبول تقديم عضو : \`قبول
مثال: \`\`${prefix}قبول @منشن عضو \`\`
 ${prefix}لرفض عضو : رفض
مثال: \`\`${prefix}رفض @منشن عضو لست متفاعل بشكل كافِ\`\`



  `
        )
        .then(() => {
          message.author.send(`

\`أوامر الكريدت\` :credit_card: 
\`${prefix}credits\` : لمعرفة رصيدك  
\`${prefix}daily\` : لأخذ جائزة يومية
\`يمكن التحويل من شخص لشخص + يزيد الكريدت فقط من امر دايلي\`

\`أوامر الموسيقى \` :notes:
\`${prefix}Play\` : تشغيل الاغنية او اضافتها للقائمة او اكمال الاغنية [p]
\`${prefix}Pause\` : ايقاف مؤقت الاغنية
\`${prefix}Resume\` : اكمال الاغنية 
\`${prefix}stop\` : لأيقاف الأغنية وخروج البوت من الروم
\`${prefix}forceskip\` : لتخطي الأغنية بشكل مباشر
\`${prefix}Queue\` : عرض القائمة 
\`${prefix}skipto\` : لتخطي الأغنية الى الأغنية القادمة في طابور الموسيقى القادمة
\`${prefix}Skip\` : تخطي للاغنية التالية 
\`${prefix}Volume\` : تغيير الصوت [vol] 
\`${prefix}np\` : عرض مايتم تشغيله الان [np] 
\`${prefix}repeat\` : تكرار الاغنية 
\`Onwer \` : <@593232818222399530>, <@635186941977165824> , <@667753369858736148>

`);
        })
        .then(e => {
          message.react("✅");
        })
        .catch(() => {
          return message.channel
            .send(
              "**يجب السماح بأستقبال الرسائل في الخاص ، لأتمكن من ارسال الاوامر لك **"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    }
  }
});
//------------------------------------كود API


//-----------------------------كود يوزر	
client.on("message", pixelbot => {
  // itzZa1D - Codes Team.
  if (pixelbot.content.startsWith(prefix + "user")) {
    // itzZa1D - Codes Team.
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {
      // itzZa1D - Codes Team.
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | Use  r Info") // itzZa1D - Codes Team.
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**✽ Name :**   ", pixelbot.author.username, true)
        .addField("**✽ Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**✽ ID :** ", pixelbot.author.id, true) // itzZa1D - Codes Team.
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**✽ Total invites :**    ", inviteCount, true)
        .setTimestamp(); // itzZa1D - Codes Team.

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); // itzZa1D - Codes Team.
    });
  }
}); 

//----------------------------------------
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "السلام عليكم") {
    message.channel.send("**:heart:وعليكم السلام ورحمة الله وبركاته:heart:**");
    message.channel.sendFile("");
	
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "برب") {
    message.channel.send("**:heart: تيت :heart:**");
    message.channel.sendFile("");
	
  }
});

////تعديل غير اساسي
/// كود اختيار لون

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == prefix + "color") {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**There's No Color With This Number ** :x: `)
      .setColor(`ff0000`);
    if (!args[0]) return message.channel.sendEmbed(embedd);
    if (isNaN(args[0]))
      return message.channel.sendEmbed(
        embedd.setDescription("Please select a number :x:")
      );
    if (!message.guild.roles.find("name", `${args[0]}`))
      return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args[0]}`);
    if (!a) return;
    if (a.hasPermission(8))
      return message.channel.send(
        embedd.setDescription("This color has administrator!")
      );
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args[0]) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args[0]}`));
  }
});
//---------------- حالة البوت 

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("dnd");

  client.user.setActivity(`${prefix}help`, { type: "Playing" });
});





//--------------------------- تكت
client.on("message", message => {
  if (message.content.startsWith(prefix + "new")) {
    const reason = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.guild.roles.exists(gg => gg.name === "Support Team"))
      return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\`.`);
    if (
      message.guild.channels.filter(
        Channel =>
          Channel.name == `ticket-${message.author.id}` &&
          Channel.type == "text"
      ).size > 0
    )
      return message.channel.send(`You already have a ticket open.`);
    message.guild
      .createChannel(`ticket-${message.author.id}`, "text")
      .then(c => {
        let role = message.guild.roles.find(gg => gg.name === "Support Team");
        let role2 = message.guild.roles.find(gg => gg.name === "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(message.guild.id, {
          READ_MESSAGES: false
        });
        message.channel.send(
          `:white_check_mark: Your ticket has been created, ${c}.`
        );
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`
          )
          .setTimestamp();
        c.send({
          embed: embed
        });
      })
      .catch(console.error);
  } else if (message.content.startsWith(prefix + "closet")) {
    if (!message.guild.roles.exists(gg => gg.name === "Support Team"))
      return message.channel.send(` لازم تسوي رتبة اسمها \`Support Team\`.`);
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send("This isn't a ticket channel!");
    if (
      !message.member.roles.has(
        message.guild.roles.filter(r => r.name === "Support Team").first().id
      )
    )
      return message.channel.send("You don't have the `Support Team` role!");
    message.channel
      .delete()
      .catch(e => message.channel.send("Check my permissions!"));
  }
});

client.on("message", async message => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  if (args[0] == `${prefix}cr`) {
    if (
      !message.guild.me.hasPermission("MANAGE_ROLES") ||
      !message.member.hasPermission("MANAGE_ROLES")
    )
      return;
    if (!args[1] || !args[2])
      return message.reply(
        `Usage: ${args[0]} [role color] [role name]\nExample: ${
          args[0]
        } blue Admin`
      );
    try {
      let role = await message.guild.createRole({
        name: args.slice(2).join(" ") || "new role",
        color: args[1].toUpperCase() || null
      });
      await message.reply(`Done, Created **${role.name}** role!`);
    } catch (e) {
      message.reply(`Error! ${e.message || e}`);
    }
  }
});
//------------------------كود مسح شات 
client.on("message", message => {
  if (message.author.bot) return; ///Pixel Team
  if (message.content.startsWith("مسح")) {
    if (!message.channel.guild)
      return message.reply(`** This Command For Servers Only**`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`** You don't have Premissions!**`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message
        .reply(`** The number can't be more than **100** .**`)
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel.messages.fetch({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages))
      .then(msgs => {
        message.channel.send(`** Done , Deleted \`${msgs.size}\` messages.** `)
          .then(messages => messages.delete(5000));
      });
  }
}); 

//--------------------كود ميوت او اسكات
client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "mute") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد رتبة الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** يجب عليك منشنت شخص اولاً**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "اسكت/احكي")
      .addField(
        "تم ميوت:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. تم اعطاء العضو ميوت**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**")
            .catch(console.error);
        });
    }
  }
});
//-------------------------------كود خروج الاعضاء

client.on("message", message => {
  if (message.content.startsWith(prefix + "setby")) {
    let args = message.mentions.channels.first();
    if (!args)
      message.channel.send("** منشن روم . ❌**").then(m => {
        m.delete(1500);
      });
    if (
      !message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send("**ليس لديك صلاحيات . ❌**");
    message.channel.send(
      `**${args}.  | :ballot_box_with_check: |لقد تم شغيل المغادرة هنا**`
    ); 
    client.on("guildMemberAdd", member => {
      if (member.user.bot) return;
      var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**الله معاك ✋ **`)
        .addField("**__شكرا لوقتك__**  ", `${member}`)
        .setDescription(`**مع السلامه تشرفنا بك ✋** `)
        .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
        .setColor("RANDOM")
        .setFooter(`نتمنى لكم الاستمتاع`);

      var channel = member.guild.channels.find(gg => gg.name === "log"); //// تعديل اساسي
      if (!channel) return;
      channel.send({ embed: embed });
    });
  }
});
//----------------- كود say 
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحيات :rolling_eyes:**"
      );

    message.channel.send("" + args.join("  "));
    message.delete();
  }
});

//----------------------------كود الويلكم
client.on("guildMemberAdd", async member => {
  if (!welcome) return;
  if (!welcome[member.guild.id]) return;
  var findingWlcChannel = welcome[member.guild.id]
    ? welcome[member.guild.id].channel
    : "null";
  const channel = await member.guild.channels.find(
    r => r.name == findingWlcChannel
  );
  if (!channel) return;
  if (channel) {
    const imageUrlRegex = /\?size=2048$/g; ///تعديل غير اساسي
    const wlcImage = await fsn.readFile("./welcome111.png"); //اسم الصورة
    let result = await fetch(
      member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128")
    );
    if (!result.ok) throw new Error("Failed to get the avatar!");
    let avatar = await result.buffer();

    let name =
      member.user.username.length > 12
        ? member.user.username.substring(0, 11) + "..."
        : member.user.username;

    // تعديل غير اساسي : هنا خيارات الصورة لو تبى تغيرها

    //Welcome Image (background)
    var imageWidth = 500; //عرض الصورة
    var imageHeight = 266; //ارتفاع الصورة

    //Avatar
    var imageX = 250; //X coordinate
    var imageY = 145; //Y coordinate
    var imageRadius = 110; //نصف قطر الصورة الدائرية

    //Member Name
    var nameSize = "12pt"; //حجم خط الاسم
    var nameKind = "Source Sans Pro (OT1)"; //نوع خط الاسم
    var nameColor = "#ff9933"; //لون خط الاسم

    //Name Position
    var nameX = 247; //position x
    var nameY = 275; //position y

    let buffer = await new Canvas(500, 300)
      .addImage(wlcImage, 0, 0, imageWidth, imageHeight)
      .addCircularImage(avatar, imageX, imageY, imageRadius)
      .setTextAlign("center")
      .setTextFont(`${nameSize} ${nameKind}`)
      .setColor(nameColor)
      .addText(name, nameX, nameY)
      .toBuffer();
    const filename = `Baron-wlc-${member.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await channel.send(attachment);
  }
});

//----------------------------- كود ميوزك 
let cmds = {
  play: { cmd: "play", a: ["p", "شغل"] },
  skip: { cmd: "skip", a: ["s", "تخطى"] },
  stop: { cmd: "stop", a: ["ايقاف"] },
  pause: { cmd: "pause", a: ["ايقاف مؤقت"] },
  resume: { cmd: "resume", a: ["r", "كمل"] },
  volume: { cmd: "volume", a: ["vol", "صوت"] },
  queue: { cmd: "queue", a: ["q", "قائمة"] },
  repeat: { cmd: "repeat", a: ["re", "تكرار"] },
  forceskip: { cmd: "forceskip", a: ["تخطي الكل", "fskip"] },
  skipto: { cmd: "skipto", a: ["st", "اذهب الى"] },
  nowplaying: { cmd: "Nowplaying", a: ["np", "الان"] }
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

Object.keys(cmds).forEach(key => {
  var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if (value.a) {
    value.a.forEach(alias => {
      client.aliases.set(alias, command);
    });
  }
});

let active = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {
  console.log(`on`);
  console.log(`Guilds: ${client.guilds.size}`);
  console.log(`Users: ${client.users.size}`);
});

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";

  let cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));

  let s;

  if (cmd === "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        `:no_entry_sign: You must be listening in a voice channel to use that!`
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        `:no_entry_sign: I can't join Your voiceChannel because i don't have ` +
          "`" +
          "`CONNECT`" +
          "`" +
          ` permission!`
      );
    }

    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        `:no_entry_sign: I can't SPEAK in your voiceChannel because i don't have ` +
          "`" +
          "`SPEAK`" +
          "`" +
          ` permission!`
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(`Added to queue: ${playlist.title}`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(args, 1);

          // eslint-disable-next-line max-depth
          var video = await youtube.getVideoByID(videos[0].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("I can't find any thing");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }

    async function handleVideo(video, msg, voiceChannel, playlist = false) {
      const serverQueue = active.get(msg.guild.id);

      //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));

      let hrs =
        video.duration.hours > 0
          ? video.duration.hours > 9
            ? `${video.duration.hours}:`
            : `0${video.duration.hours}:`
          : "";
      let min =
        video.duration.minutes > 9
          ? `${video.duration.minutes}:`
          : `0${video.duration.minutes}:`;
      let sec =
        video.duration.seconds > 9
          ? `${video.duration.seconds}`
          : `0${video.duration.seconds}`;
      let dur = `${hrs}${min}${sec}`;

      let ms = video.durationSeconds * 1000;

      const song = {
        id: video.id,
        title: video.title,
        duration: dur,
        msDur: ms,
        url: `https://www.youtube.com/watch?v=${video.id}`
      };
      if (!serverQueue) {
        const queueConstruct = {
          textChannel: msg.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [], ////تعديل غير اساسي
          volume: 25, //// تعديل درجة الصوت الاساسية
          requester: msg.author,
          playing: true,
          repeating: false
        };
        active.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
          var connection = await voiceChannel.join();
          queueConstruct.connection = connection;
          play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
          console.error(`I could not join the voice channel: ${error}`);
          active.delete(msg.guild.id);
          return msg.channel.send(`I cant join this voice channel`);
        }
      } else {
        serverQueue.songs.push(song);

        if (playlist) return undefined;
        if (!args) return msg.channel.send("no results.");
        else
          return msg.channel
            .send(":watch: Loading... [`" + args + "`]")
            .then(m => {
              setTimeout(() => {
                //:watch: Loading... [let]
                m.edit(
                  `:notes: Added **${song.title}**` +
                    "(` " +
                    song.duration +
                    ")`" +
                    ` to the queue at position ` +
                    `${serverQueue.songs.length}`
                );
              }, 500);
            });
      }
      return undefined;
    }

    function play(guild, song) {
      const serverQueue = active.get(guild.id);

      if (!song) {
        serverQueue.voiceChannel.leave();
        active.delete(guild.id);
        return;
      }
      //console.log(serverQueue.songs);
      if (serverQueue.repeating) {
        console.log("Repeating");
      } else {
        serverQueue.textChannel.send(
          ":notes: Added **" +
            song.title +
            "** (`" +
            song.duration +
            "`) to begin playing."
        );
      }
      const dispatcher = serverQueue.connection
        .playStream(ytdl(song.url))
        .on("end", reason => {
          //if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
          //else console.log(reason);
          if (serverQueue.repeating) return play(guild, serverQueue.songs[0]);
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
    }
  } else if (cmd === "stop") {
    if (msg.guild.me.voiceChannel !== msg.member.voiceChannel)
      return msg.channel.send(
        `You must be in ${msg.guild.me.voiceChannel.name}`
      );
    // if (!msg.member.hasPermission("ADMINISTRATOR")) {
    //    msg.react("❌");
    //    return msg.channel.send("You don't have permission `ADMINSTRATOR`");
    //  }
    let queue = active.get(msg.guild.id);
    if (queue.repeating)
      return msg.channel.send(
        "Repeating Mode is on, you can't stop the music, run `" +
          `${prefix}repeat` +
          "` to turn off it."
      );
    queue.songs = [];
    queue.connection.dispatcher.end();
    return msg.channel.send(
      ":notes: The player has stopped and the queue has been cleared."
    );
  } else if (cmd === "skip") {
    let vCh = msg.member.voiceChannel;

    let queue = active.get(msg.guild.id);

    if (!vCh)
      return msg.channel.send(
        "Sorry, but you can't because you are not in voice channel"
      );

    if (!queue) return msg.channel.send("No music playing to skip it");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip it, because repeating mode is on, run " +
          `\`${prefix}forceskip\``
      );

    // let req = vCh.members.size - 1;

    //if (req == 1) {
    msg.channel.send("**:notes: Skipped **" + args);
    return queue.connection.dispatcher.end("Skipping ..");
    // }

    // if (!queue.votes) queue.votes = [];

    // if (queue.votes.includes(msg.member.id))
    //  return msg.say(
    //    `You already voted for skip! ${queue.votes.length}/${req}`
    //  );

    //  queue.votes.push(msg.member.id);

    //  if (queue.votes.length >= req) {
    //     msg.channel.send("**:notes: Skipped **" + args);

    //     delete queue.votes;

    //     return queue.connection.dispatcher.end("Skipping ..");
    //   }
    //
    //  msg.channel.send(
    //  `**You have successfully voted for skip! ${queue.votes.length}/${req}**`
    // );
  } else if (cmd === "pause") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) {
      return msg.channel.send("No music playing to pause.");
    }

    if (!queue.playing)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let disp = queue.connection.dispatcher;

    disp.pause("Pausing..");

    queue.playing = false;

    msg.channel.send(
      ":notes: Paused " + args + ". **Type** `" + prefix + "resume` to unpause!"
    );
  } else if (cmd === "resume") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) return msg.channel.send(":notes: No music paused to resume.");

    if (queue.playing)
      return msg.channel.send(":notes: No music paused to resume.");

    let disp = queue.connection.dispatcher;

    disp.resume("Resuming..");

    queue.playing = true;

    msg.channel.send(":notes: Resumed.");
  } else if (cmd === "volume") {
    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send(
        ":notes: There is no music playing to set volume."
      );

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(":notes: You are not in my voice channel");

    let disp = queue.connection.dispatcher;

    if (isNaN(args[0])) return msg.channel.send(":notes: Numbers only!");

    if (parseInt(args[0]) > 100)
      return msg.channel.send("You can't set the volume more than **100**.");
    //:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
    msg.channel.send(
      ":loud_sound: Volume has been **changed** from (`" +
        queue.volume +
        "`) to (`" +
        args[0] +
        "`)"
    );

    queue.volume = args[0];

    disp.setVolumeLogarithmic(queue.volume / 100);
  } else if (cmd === "queue") {
    let queue = active.get(msg.guild.id);

    if (!queue)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let embed = new Discord.RichEmbed().setAuthor(
      `${client.user.username}`,
      client.user.displayAvatarURL
    );
    let text = "";

    for (var i = 0; i < queue.songs.length; i++) {
      let num;
      if (i > 8) {
        let st = `${i + 1}`;
        let n1 = Converter.toWords(st[0]);
        let n2 = Converter.toWords(st[1]);
        num = `:${n1}::${n2}:`;
      } else {
        let n = Converter.toWords(i + 1);
        num = `:${n}:`;
      }
      text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`;
    }
    embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`);
    msg.channel.send(embed);
  } else if (cmd === "repeat") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send("There is no music playing to repeat it.");

    if (queue.repeating) {
      queue.repeating = false;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`False`)"
      );
    } else {
      queue.repeating = true;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`True`)"
      );
    }
  } else if (cmd === "forceskip") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (queue.repeating) {
      queue.repeating = false;

      msg.channel.send("ForceSkipped, Repeating mode is on.");

      queue.connection.dispatcher.end("ForceSkipping..");

      queue.repeating = true;
    } else {
      queue.connection.dispatcher.end("ForceSkipping..");

      msg.channel.send("ForceSkipped.");
    }
  } else if (cmd === "skipto") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue.songs || queue.songs < 2)
      return msg.channel.send("There is no music to skip to.");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip, because repeating mode is on, run " +
          `\`${prefix}repeat\` to turn off.`
      );

    if (!args[0] || isNaN(args[0]))
      return msg.channel.send(
        "Please input song number to skip to it, run " +
          prefix +
          `queue` +
          " to see songs numbers."
      );

    let sN = parseInt(args[0]) - 1;

    if (!queue.songs[sN])
      return msg.channel.send("There is no song with this number.");

    let i = 1;

    msg.channel.send(
      `Skipped to: **${queue.songs[sN].title}[${queue.songs[sN].duration}]**`
    );

    while (i < sN) {
      i++;
      queue.songs.shift();
    }

    queue.connection.dispatcher.end("SkippingTo..");
  } else if (cmd === "Nowplaying") {
    let q = active.get(msg.guild.id);

    let now = npMsg(q);

    msg.channel.send(now.mes, now.embed).then(me => {
      setInterval(() => {
        let noww = npMsg(q);
        me.edit(noww.mes, noww.embed);
      }, 5000);
    });

    function npMsg(queue) {
      let m =
        !queue || !queue.songs[0] ? "No music playing." : "Now Playing...";

      const eb = new Discord.RichEmbed();

      eb.setColor(msg.guild.me.displayHexColor);

      if (!queue || !queue.songs[0]) {
        eb.setTitle("No music playing");
        eb.setDescription(
          "\u23F9 " + bar(-1) + " " + volumeIcon(!queue ? 100 : queue.volume)
        );
      } else if (queue.songs) {
        if (queue.requester) {
          let u = msg.guild.members.get(queue.requester.id);

          if (!u) eb.setAuthor("Unkown (ID:" + queue.requester.id + ")");
          else eb.setAuthor(u.user.tag, u.user.displayAvatarURL);
        }

        if (queue.songs[0]) {
          try {
            eb.setTitle(queue.songs[0].title);
            eb.setURL(queue.songs[0].url);
          } catch (e) {
            eb.setTitle(queue.songs[0].title);
          }
        }
        eb.setDescription(embedFormat(queue));
      }

      return {
        mes: m,
        embed: eb
      };
    }

    function embedFormat(queue) {
      if (!queue || !queue.songs) {
        return "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(100);
      } else if (!queue.playing) {
        return (
          "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(queue.volume)
        );
      } else {
        let progress = queue.connection.dispatcher.time / queue.songs[0].msDur;
        let prog = bar(progress);
        let volIcon = volumeIcon(queue.volume);
        let playIcon = queue.connection.dispatcher.paused ? "\u23F8" : "\u25B6";
        let dura = queue.songs[0].duration;

        return (
          playIcon +
          " " +
          prog +
          " `[" +
          formatTime(queue.connection.dispatcher.time) +
          "/" +
          dura +
          "]`" +
          volIcon
        );
      }
    }

    function formatTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
    }

    function bar(precent) {
      var str = "";

      for (var i = 0; i < 12; i++) {
        let pre = precent;
        let res = pre * 12;

        res = parseInt(res);

        if (i == res) {
          str += "\uD83D\uDD18";
        } else {
          str += "▬";
        }
      }

      return str;
    }

    function volumeIcon(volume) {
      if (volume == 0) return "\uD83D\uDD07";
      if (volume < 30) return "\uD83D\uDD08";
      if (volume < 70) return "\uD83D\uDD09";
      return "\uD83D\uDD0A";
    }
  }
});

//--------------------------------كود سحب شخص
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("RANDOM")
            .setTitle(`✽ **Premium**`)

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});


//------------------------كود فتح وغلق الروم 
client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**تم قفل الشات :no_entry: **");
      });
  }
  if (message.content === prefix + "open") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**تم فتح الشات :white_check_mark:**");
      });
  }
});


//--------------------معلومات عن السيرفر
client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:✽** Server ID:**", `» ${message.guild.id} `, true)
      .addField(
        ":calendar:✽** Created On**",
        `» ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(":crown: ✽**Server Owner**", `**${message.guild.owner}**`, true)
      .addField(
        `✽** Members ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        ":speech_balloon:✽** Channels **",
        `» **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " TexT | VoicE  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":earth_africa:✽** Region **", ` ${message.guild.region}`, true)
      .setImage("")

      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});



//------------------------------------------كود بنج
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "ping")) {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    var Bping = `${Math.round(client.ping)}`;

    const E1ping = new Discord.RichEmbed()
      .setTitle("ــــــــــــــــــــــــــــــ")
      .addField(
        `**BOT Ping Is** :__${Bping}📶__`,
        "ــــــــــــــــــــــــــــــ"
      )
      .setFooter(`Requested by | ${message.author.tag}`)
      .setColor("RANDOM");
    message.channel.send(E1ping);
  }
});
//-----------------------كود منشن بوتات
client.on("message", message => {
  if (message.content === prefix + "ls") {
    var list_all = [];
    message.guild.members.forEach(bb => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});
//--------------------- كود رابط السيرفر
client.on("message", message => {
  if (message.content.split(" ")[0] === prefix + "رابط") {
    message.channel
      .createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
      })
      .then(invite => message.author.send(invite.url));
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        "** تم ارسال الرابط على الخاص ، اذا لم يصلك افتح الخاص  **"
      )
      .setAuthor(client.user.username, client.user.avatarURL)
      .setAuthor(client.user.username, client.user.avatarURL)
      .setFooter("طلب بواسطة: " + message.author.tag);

    message.channel.sendEmbed(embed).then(message => {
      message.delete(10000);
    });
    const Embed11 = new Discord.RichEmbed().setColor("RANDOM")
      .setDescription(`** مدة الرابط : يوم 
 عدد استخدامات الرابط : 5 **`);

    message.author.sendEmbed(Embed11);
  }
});


//---------------------------------------------------
client.on("message", onMessage);   // On User Sending Message
client.on('ready', onClientReady); // On Bot Start
client.on("message", message => {
  if (message.content === prefix + "bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("Random")
      .addField(
        "✽ **Bot Ping** : ",
        `» ${Date.now() - client.createdTimestamp}` + " ms",
        true
      )
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**Channels** : ", `» ${client.channels.size} `, true)
      .addField("**Users** : ", `» ${client.users.size} `, true)
      .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**Bot Owner** :  ", `» <@593232818222399530> , <@635186941977165824> ,<@667753369858736148> `, true)
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL);
    message.channel.send(bot);
  }
});






//----------------------------------بكاجدج

// Login
client.login(token);

