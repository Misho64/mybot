let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 


 if (/^.p2$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `
🔴 اذا احتجت مساعده اكتب       ( *.دعم - .help*) 🔴
 ━━━ *الاوامر الخاصة بالمجموعات* ━━━

⚪ *.توب*
┃يجيبلك افضل عشره ف الجروب

⚫ *.المشرفين*
┃يجيبلك قايمة المشرفين 

🔵 *.منشن*
┃يمنشن جماعي لكل الاعضاء 

🟢 *.الاشباح*
┃يجيبلك الاعضاء الى مابتتفاعلش 

🟡 *.لينك*
┃يجيبلك لينك الجروب

🔴 *.رستر*
┃يرستر او يعمل اعاده تعين للينك الجروب

🟤 *.رفع*
┃رفع عضو لمشرف

🟠 *.خفض*
┃خفض مشرف لعضو

 *💫  BROPLT - BOT  💫*

`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 


 return !0 } 
 export default handler