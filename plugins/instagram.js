import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(args[0])) throw m.reply(`Use example ${usedPrefix}${command} link`);
    await m.reply(`*💫  BROPLT - BOT  💫*

ᴸ ᵒ ᵃ ᵈ ⁱ ⁿ ᵍ...
جـاري تـحـمـيـل

*💫  BROPLT - BOT  💫*`);
    let tes = await fetch(`https://inrl-web.onrender.com/api/insta?url=${args[0]}`);
            const json = await tes.json();
            const igdl = json.result;
            await conn.sendFile(m.chat, igdl, 'error.mp4', '*💫  BROPLT - BOT  💫*\n\nBy: ⁶⁴ᴳʳᵒᵘᵖ\n\n*💫  BROPLT - BOT  💫*', m);
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?|insta|instagram(dl)?)$/i

export default handler
