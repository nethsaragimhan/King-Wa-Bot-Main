const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/24b9b8507613125d34bd1.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️] *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🍒 *Owner & Founder - 𝙽𝙴𝚃𝙷𝚂𝙰𝚁𝙰 𝙶𝙸𝙼𝙷𝙰𝙽*

🍒 *Language - NODE.JS*

   🔱SPECIAL THANKS🔱

🍁 *Github* :- https://github.com/nethsaragimhan/king-bot
🍁 *Youtube* :- https://youtube.com/channel/UCgwWV1Cya4_gUFKYOQYQtHw
🍁 *Bot Group* :- https://chat.whatsapp.com/FxRkE50toG4KtC8p9703PY
      `})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/24b9b8507613125d34bd1.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `🔥 [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️] *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🍒 *Owner & Founder - 𝙽𝙴𝚃𝙷𝚂𝙰𝚁𝙰 𝙶𝙸𝙼𝙷𝙰𝙽*

🍒 *Language - NODE.JS*

   🔱SPECIAL THANKS🔱

🍁 *Github* :- https://github.com/nethsaragimhan/king-bot

🍁 *Youtube* :- https://youtube.com/channel/UCgwWV1Cya4_gUFKYOQYQtHw

🍁 *Bot Group* :- https://chat.whatsapp.com/FxRkE50toG4KtC8p9703PY  `})
        


    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/24b9b8507613125d34bd1.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `🔥 [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️] *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🍒 *Owner & Founder - 𝙽𝙴𝚃𝙷𝚂𝙰𝚁𝙰 𝙶𝙸𝙼𝙷𝙰𝙽*

🍒 *Language - NODE.JS*

   🔱SPECIAL THANKS🔱

🍁 *Github* :- https://github.com/nethsaragimhan/king-bot

🍁 *Youtube* :- https://youtube.com/channel/UCgwWV1Cya4_gUFKYOQYQtHw

🍁 *Bot Group* :- https://chat.whatsapp.com/FxRkE50toG4KtC8p9703PY
`  ,quoted: message.data})

    }));
}
