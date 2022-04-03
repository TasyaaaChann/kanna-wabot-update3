let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6283115192154
│┝‷✧ *Pulsa2:* 6283830815715
│┝‷✧ *Linkaja:* 62xxx
│┝‷✧ *Gopay:* 62xxx
│┝‷✧ *Ovo:* 62xxx
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6283830815715?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
