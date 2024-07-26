const { zokou } = require('../framework/zokou');
const moment = require('moment-timezone');
const { getBuffer } = require('../framework/dl/Func');
const axios = require('axios');
const speed = require('misc/sstab');

function runtime(_time) {
    let days = Math.floor(_time / 86400000);
    let hours = Math.floor((_time % 86400000) / 3600000);
    let minutes = Math.floor((_time % 3600000) / 60000);
    let seconds = Math.floor((_time % 60000) / 1000);
    return `${days > 0 ? `${days}d, ` : ''}${hours > 0 ? `${hours}h, ` : ''}${minutes > 0 ? `${minutes}m, ` : ''}${seconds}s`;
}

let timestamp = speed();
let flashspeed = (speed() - timestamp).toFixed(2);

zokou({
    nomCom: 'ping',
    desc: '*_Uptime of 4ORTY6YX-OFFICIAL-MD is: *\n\nTo check ping: *ping*\nTo check response: *response*\nTo check performance: *performance*',
    Categorie: 'General',
    reaction: '📡',
    fromMe: true
}, async (_data, _response, _details) => {
    const { ms, arg, repondre } = _details;
    await repondre(`To check performance, send: *performance*\n\nUptime: ${flashspeed} seconds`);
});

zokou({
    nomCom: 'runtime',
    desc: 'Check the uptime of the bot.',
    Categorie: 'General',
    reaction: '🎭',
    fromMe: true
}, async (_data, _response, _details) => {
    const { ms, arg, repondre } = _details;
    await repondre(`Runtime: ${runtime(process.uptime())}_*`);
});

zokou({
    nomCom: 'ss',
    desc: 'Take a screenshot of a website.',
    Categorie: 'General',
    reaction: '🎥',
    fromMe: true
}, async (_data, _response, _details) => {
    const { ms, arg, repondre } = _details;
    if (!arg || arg.length === 0) return repondre('*Provide a link...*');
    const url = arg.split(' ')[0];
    let imageUrl = `https://api.screenshotmachine.com?url=${url}&dimension=720x720`;
    let buffer = await getBuffer(imageUrl);
    await _response.sendMessage(_data, { image: buffer }, { caption: '*4ORTY6YX-MD Screenshot*' }, { quoted: ms });
});
