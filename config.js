const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'V 1.0.0 PUBLIC',
    ZRUN: "zenzapi",
    CHANNEL: 'https://t.me/kingwabotsupport',
    MEN: process.env.MENU_CMD === undefined ? 'menu' : process.env.MENU_CMD,
    SESSION: process.env.KINGBOT_SESSION === undefined ? '' : process.env.KINGBOT_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    SUDO: process.env.ANTİ_LİNK === undefined ? '94729352830' : process.env.SUDO,
    TIME: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.TIME_ZONE,
    AL: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/24b9b8507613125d34bd1.jpg' : process.env.ALIVE_LOGO,
    SD: process.env.SONG_DOWNLOAD === undefined ? '🖲️  *🅺︎🅸︎🅽︎🅶︎ ʙᴏᴛ 𝙸𝚜 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝚈𝚘𝚞𝚛 𝚂𝚘𝚗𝚐....*' : process.env.SONG_DOWNLOAD,
    SU: process.env.SONG_UPLOAD === undefined ? '🖲️  *🅺︎🅸︎🅽︎🅶︎ ʙᴏᴛ 𝙸𝚜 𝚄𝚙𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝚈𝚘𝚞𝚛 𝚂𝚘𝚗𝚐....*' : process.env.SONG_UPLOAD,
    VD: process.env.VIDEO_DOWNLOAD === undefined ? '🖲️  *🅺︎🅸︎🅽︎🅶︎ ʙᴏᴛ 𝙸𝚜 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝚈𝚘𝚞𝚛 𝚅𝚒𝚍𝚎𝚘....*' : process.env.VIDEO_DOWNLOAD,
    VU: process.env.VIDEO_UPLOAD === undefined ? '🖲️  *🅺︎🅸︎🅽︎🅶︎ ʙᴏᴛ 𝙸𝚜 𝚄𝚙𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝚈𝚘𝚞𝚛 𝚅𝚒𝚍𝚎𝚘....*' : process.env.VIDEO_UPLOAD,
    AUTOBIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    BAD_KICK: process.env.BAD_KICK === undefined ? 'false' : process.env.BAD_KICK,
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN,
    RULES: process.env.GROUP_RULES === undefined ? 'No Rules' : process.env.GROUP_RULES,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    OWNER: process.env.OWNER_NAME === undefined ? '𝚆𝙷𝙸𝚃𝙴 𝙷𝙰𝙲𝙺𝙴𝚁𝚂' : process.env.OWNER_NAME,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/24b9b8507613125d34bd1.jpg' : process.env.ALIVE_LOGO,
    WELCOME_LOGO: process.env.WELCOME_LOGO === undefined ? 'https://www.mboxdrive.com/1413772033.mp4' : process.env.WELCOME_LOGO,
    OWNERNUM: process.env.OWNER_NUMBER === undefined ? '94729352830' : process.env.OWNER_NUMBER,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/24b9b8507613125d34bd1.jpg' : process.env.ALIVE_LOGO,
    VTYPE: process.env.VOICE_CHAT_TYPE === undefined ? 'baby' : process.env.VOICE_CHAT_TYPE,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    ANTIBAD: process.env.ANTIBAD === undefined ? 'false' : process.env.ANTIBAD,
    WARN1: process.env.WARN_MSG_1 === undefined ? '\n    📛 GROUP WARN 📛 \n\n🔱 NO WARNS 🔱\n\n': process.env.WARN_MSG_1,
    WARN2: process.env.WARN_MSG_2 === undefined ? '\n    📛 GROUP WARN 📛 \n\n🔱 NO WARNA 🔱\n\n': process.env.WARN_MSG_2,
    WARN3: process.env.WARN_MSG_3 === undefined ? '\n    📛 GROUP WARN 📛 \n\n🔱 NO WARNA 🔱\n\n': process.env.WARN_MSG_3,
    WARN4: process.env.WARN_MSG_4 === undefined ? '\n    📛 GROUP WARN 📛 \n\n🔱 NO WARNA 🔱\n\n': process.env.WARN_MSG_4,
    GROUPN1: process.env.GROUP_DETAILS === undefined ? 'King Bot OFFICIAL SUPPORT': process.env.GROUP_DETAILS,
    GROUPL1: process.env.GROUP_LINK_1 === undefined ? 'https://t.me/kingwabotsupport': process.env.GROUP_LINK_1,
    GROUPN2: process.env.GROUP_NAME_2 === undefined ? '': process.env.GROUP_NAME_2,
    GROUPL2: process.env.GROUP_LINK_2 === undefined ? '': process.env.GROUP_LINK_2,
    GROUPN3: process.env.GROUP_NAME_3 === undefined ? '': process.env.GROUP_NAME_3,
    GROUPL3: process.env.GROUP_LINK_3 === undefined ? '': process.env.GROUP_LINK_3,
    GROUPN4: process.env.GROUP_NAME_4 === undefined ? '': process.env.GROUP_NAME_4,
    GROUPL4: process.env.GROUP_LINK_4 === undefined ? '': process.env.GROUP_LINK_4,
    CAPTION: process.env.CAPTION === undefined ? '▷ ᴹᴬᴰᴱ 🄱🅈 [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️] աɦ𝐚𝐭𝐬𝐚𝐩𝐩 𝐔𝐬𝐞𝐫 𝐁𝐨𝐭' : process.env.CAPTION,
    CHAT_BOT: process.env.CHAT_BOT === undefined ? 'false' : process.env.CHAT_BOT,
    AUTOVOICE: process.env.VOICE_CHAT === undefined ? 'false' : process.env.VOICE_CHAT,
    TAGREPLY: process.env.TAG_REPLY === undefined ? '919072790587@s.whatsapp.net' : process.env.TAG_REPLY,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    BOT_NAME: process.env.BOT_NAME === undefined ? '[🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️]   ' : process.env.BOT_NAME,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    AUTOSTICKER: process.env.AUTO_STICKER === undefined ? 'false' : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? 'false' : process.env.DISABLE_STICKER,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    FULLREX: process.env.FULL_REX === undefined ? 'false' : process.env.FULL_REX,
    WELCOME_GIF: process.env.WELCOME_GIF === undefined ? '' : process.env.WELCOME_GIF,
    BYE_GIF: process.env.BYE_GIF === undefined ? '' : process.env.BYE_GIF,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    TREX: process.env.TREX === undefined ? 'King Bot' : process.env.TREX,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    PLKBGM: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    OVERMSG: process.env.OVER_MESSAGE === undefined ? 'default' : process.env.OVER_MESSAGE,
    KTB: process.env.TAG_HEADER === undefined ? 'King Bot' : process.env.TAG_HEADER,
    TB: process.env.TAG_HEADER === undefined ? '' : process.env.TAG_HEADER,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    YAK: process.env.YAK === undefined ? '94' : process.env.YAK,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'main',
    HNLOCK: 'hadi-api',
    ZLOCK: 'zeks',
    ZNLOCK: 'zenzapi.xyz',
    HLOCK: process.env.HLOCK === undefined ?'hadi-api' : process.env.HLOCK,
    NEOA: process.env.NEOA === undefined ?'aca83a4354ac' : process.env.NEOA,
    NEOS: process.env.NEOS === undefined ?'zenzapi' : process.env.NEOS,
    NEOY: process.env.NEOY === undefined ?'xyz' : process.env.NEOY,
    NY: process.env.NY === undefined ?'xyz' : process.env.NY,
    NA: process.env.NA === undefined ?'aca83a4354ac' : process.env.NA,
    NS: process.env.NS === undefined ?'zenzapi' : process.env.NS,
    HACKER: process.env.HACKER === undefined ?'h4ck3rs404' : process.env.HACKER,
    XURL: process.env.XURL === undefined ?'ttps://api.zeks.me/api/' : process.env.XURL,
    XTPS: process.env.XTPS === undefined ?'extpro-scraper?apikey=' : process.env.XTPS,
    XEPS: process.env.XEPS === undefined ?'photo-scraper?apikey=' : process.env.XEPS,
    XAPI: process.env.XAPI === undefined ?'alexaapikey' : process.env.XAPI,
    A_HACKER: process.env.A_HACKER === undefined ?'h4ck3rs404-api' : process.env.A_HACKER,
    WELCOME: process.env.WELCOME === undefined ?'gif' : process.env.WELCOME,
    AI_BOT: process.env.AI_BOT === undefined ?'true' : process.env.AI_BOT,
    ADULT_MODE: process.env.ADULT_MODE === undefined ?'off' : process.env.ADULT_MODE,
    INBOX_BLOCK: process.env.INBOX_BLOCK === undefined ?'false' : process.env.INBOX_BLOCK,
    ANTI_BAD: process.env.ANTI_BAD === undefined ?'true' : process.env.ANTIBAD,
    WHATS_LINK_BLOCK: process.env.WHATS_LINK_BLOCK === undefined ?'false' : process.env.WHATS_LINK_BLOCK,
    SITE: process.env.SITE === undefined ?'netfiletolink.herokuapp.com/' : process.env.SITE,
    MENU_LOGO: process.env.MENU_LOGO === undefined ?'https://telegra.ph/file/.jpg' : process.env.MENU_LOGO,
    DEVELOPER: '𝚆𝙷𝙸𝚃𝙴 𝙷𝙰𝙲𝙺𝙴𝚁𝚂',
    AUTHOR: '𝚆𝙷𝙸𝚃𝙴 𝙷𝙰𝙲𝙺𝙴𝚁𝚂',
    PKGPS: process.env.PKGPS === undefined ?'=xnxcom' : process.env.PKGPS,
    GIT: 'https://githu',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    ON: "hunter",
    CCN: "Ikyy69",
    ON: "hunter",
    HLOCK: "hadi-api",
    ZTH: "d537895142",
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
};
 
