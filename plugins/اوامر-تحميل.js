let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 


 if (/^.p3$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `
🔴 اذا احتجت مساعده اكتب       ( *.دعم - .help*) 🔴
━━━━━━ *الاوامر العامة* ━━━━━━

⚪ *.fb*
┃يقوم بتحميل فيديوهات من منصة الفسيبوك

⚫ *.x*
┃يقوم بتحميل فيديوهات من منصة التويتر او اكس

🟣 *.yt*
┃يقوم بتحميل فيديوهات من منصة اليوتيوب

🔵 *.tik*
┃يقوم بتحميل فيديوهات من منصة التيك توك

  *💫  BROPLT - BOT  💫*
`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 


 return !0 } 
 export default handler