let DataPack = require('king-bot-pro');
let KingBot = require('king-bot-pro/sources/dc/handler');
let Details = require('king-bot-pro/sources/dc/Details');
let { textRepeterking, checkIsGroup, checkUsAdmin, checkImAdmin}= require('king-bot-pro/sources/dc/cmd/admin');
let { MessageType, MessageOptions, Mimetype, GroupSettingChange, ChatModification } = require('@nethsaragimhan/king-bot-web');
let A = '\n'.repeat(30)
let KING = 'ᴀɴᴛɪ ꜱᴘᴀᴍ ᴄʀᴇᴀʀ ʀᴇʙᴀɴ' + (A + '✬').repeat(15) + 'ᴀɴᴛɪ ꜱᴘᴀᴍ ᴄʟᴇᴀʀ ʀᴇʙᴀɴ'

KingBot['IntroduceCMD']({pattern: 'antispam', fromMe: true, delownkingcmd: false, dontAdCommandList: true}, (async (message, input) => {
var gp = await checkIsGroup(message)
    if (gp) {
var im = await checkImAdmin(message)
    if (im) {
await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
}
        }
                var msg = await message.reply('❉Safe Mode Activating....\nPOWERED BY [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️]');
                await textRepeterking(message,KINGBOT,12)
  }));
KingBot['IntroduceCMD']({pattern: 'antispam', fromMe: false, delownkingcmd: false, dontAdCommandList: true}, (async (message, input) => {
var gp = await checkIsGroup(message)
             if(!gp) return;
var us = await checkUsAdmin(message)
             if (!us) return;
var im = await checkImAdmin(message)
             if (!im) return
await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
              var msg = await message.reply('❉Safe Mode Activating....\nPOWERED BY [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️]');
              await textRepeterKing(message,KINGBOT,12)
  }));
