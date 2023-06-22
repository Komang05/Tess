import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    let info = fs.readFileSync('./mp3/yaudah.mp3')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: `iya kenpa ${name}`,
    body: bottime,
    thumbnail: fp,
    sourceUrl: syt
  }
  } }) 
          }
handler.customPrefix = /^(ok|ydh|ywdh|yaudah|okee|ooke)$/i
handler.command = new RegExp

export default handler
