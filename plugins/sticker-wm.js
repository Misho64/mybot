import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*قم بالرد على الملصق الذي تريد إضافة حزمة إليه*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*قم بالرد على الملصق الذي تريد إضافة حزمة إليه*'
let img = await m.quoted.download()
if (!img) throw '*الرجاء  الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.wm Ali|Dev*'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*آسف ، شيء ما خاطئ ..تحقق من أنك استجابت لملصق وأضفت اسم حزمة او تواصل مع الدعم البوت (.الدعم)*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^سرقة|سرقه|wm$/i
export default handler






