"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "✔", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*4ORTY6YX-MD IS ONLINE*  \n\n ' + "Your bot is running at a good speed😉👍";
    let d = '                                                                           BOT STATUS: HEALTHY✨';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/90d363a674e5a9f49edec.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
