let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗] متنساش المنشن يحب*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗] متنساش المنشن يحب*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗]تم إلغاء حظر المستخدم*\n*—◉ يمكن للمستخدم استخدام البوت مجددا*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true
export default handler