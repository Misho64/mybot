let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 


 if (/^.p7$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `*مرحبا بك بلوحة التحكم الخاصة بالبوت*

 لتسجيل الدخول
 *Username:Password*
 إذا واجهتك مشكلة تواصل مع مطور البوت
 ( *.المطور* )
 *💫  BROPLT - BOT  💫*
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

    if (/^admin:admin091^$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `
BROPLT admin V1

 تمت عملية تسجيل الدخول بنجاح✅

1-block
2-unblock
3-ban
4-unban
 هناك المزيد من الأوامر تحت الإضافة
 
*-تم تغيير رقم السري الخاص بك تم إرساله بالخاص-*
 *💫  BROPLT - BOT  💫*
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 


 return !0 } 
 export default handler