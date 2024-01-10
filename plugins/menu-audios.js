import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/bff.mp3'
let pp = imagen4
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `━━━━━━━━━━━━━━━━━━
┃هاممم لازم تدخل قروب البوت   ┃
┃عشان ممكن يتحظر رقم ده       ┃
━━━━━━━━━━━━━━━━━━
🔴 اذا احتجت مساعده اكتب ( *.دعم - .help*) 🔴

لرؤية الأوامر الخاصه بالملصقات أكتب ما بداخل الاقواس
🩵(.p1)🩵

لرؤية الأوامر الخاصه بالمجموعات أكتب ما بداخل الاقواس
💛(.p2)💛

لرؤية الأوامر لتحميل فيديوهات من مواقع تواصل الاجتماعي
🩶(.p3)🩶

لرؤية خدمات هتسهل عليك كثير أكتب ما بداخل الاقواس
🩷(.p4)🩷

لرؤية الأوامر الدينية أكتب ما بداخل الاقواس
💚(.p5)💚

لرؤية الأوامر الخاصه بالألعاب أكتب ما بداخل الاقواس
💜(.p6)💜
-----------------------------------
عدد الجموعات الي بداخلها البوت : *18* مجموعة

إجمالي مستخدمين البوت : *371* شخص

يتم تحديث الأرقام كل 24 ساعة لكي لا يتوقف البوت عن العمل

 *💫  BROPLT - BOT  💫* 
`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `${wm}`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『👑┇Shadow┇🤖┇Bot┇👑』',
body: null,

}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃', m)
}}
handler.command = /^(اوامر|الاوامر|الأوامر|menu|أوامر)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}



