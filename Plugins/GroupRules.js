const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'rules', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      🖲️ ╔ GROUP RULES ╗🖲️ \n\n' + Config.RULES + '\n\n\n       [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️]   '})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'rules', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      🖲️ ╔ GROUP RULES ╗🖲️ \n\n' + Config.RULES + '\n\n\n       [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️]   '})

    }));
  
  Trex.addrex({pattern: 'rules', fromMe: false,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      🖲️ ╔ GROUP RULES ╗🖲️ \n\n' + Config.RULES + '\n\n\n      [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️]   '  ,quoted: message.data})

    }));
}
                  
                  
