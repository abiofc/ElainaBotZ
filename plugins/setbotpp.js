/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Miaweers
*/

if (!isCreator) return m.reply(mess.owner)
            if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            var media = await hisoka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            if (args[0] == `'panjang'`) {
            var { img } = await generateProfilePicture(media)
            await hisoka.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            } else {
            var data = await hisoka.updateProfilePicture(botNumber, { url: media })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            }
            }
    }
handler.help = ['setbotpp']
handler.command = /^(setbotpp)$/i
handler.owner = true

module.exports = handler
