let pp = imagen4
let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 

 if (/^.p5$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `
🔴 اذا احتجت مساعده اكتب       ( *.دعم - .help*) 🔴
━━━━━━ *الاوامر الدينية* ━━━━━━

🟤 *أذكار الصباح*
┃يقوم بإعطائك أذكار الصباح

🔴 *أذكار المساء*
┃يقوم بإعطائك أذكار المساء
🟠 *.اية*
┃آية الكرسي
💜 *.صوت1*
💙 *.صوت2*
🩵 *.صوت3*
💚 *.صوت4*
💛 *.صوت5*
🧡 *.صوت6*
🤍 *.صوت7*
┃بعض الآيات الجميلة من القران بأصوات هادئة ومريحة

 *💫  BROPLT - BOT  💫* `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 


 return !0 } 
 export default handler