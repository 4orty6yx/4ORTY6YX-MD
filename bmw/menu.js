const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }

    var emoji = { "General": "🌐", "Logo": "🎨", "Hentai": "🔥", "Weeb": "🌸", "Recherche": "🔍", "Conversion": "🌟", "Groupe": "♻️", "Autre": "🪖" };

    
 cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('EAT');

// Créer une date et une heure en EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭──❂𝟰𝗢𝗥𝗧𝗬𝟲𝗬𝗫-𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟-𝗠𝗗❂───❂
┊ ╭────────────────❂
┊ ┊ *User* : ${s.OWNER_NAME}
┊ ┊ *Mode* : ${mode}
┊ ┊ *Commands* : ${cm.length}
┊ ┊ *bot Ram* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┊ ┊ *Our website*: https://4orty6yxofficial.shop 
┊ ┊ 
┊ ╰─────────────────❂
╰───────────────────❂ \n\n`;
 
    let menuMsg=`  
`;

    for (const cat in coms) {
        menuMsg += `*╭────❂* *${cat}* *───❂*`;
        for (const cmd of coms[cat]) {
            menuMsg += `  
*┊🪀┊*  .${cmd}`;
        }
        menuMsg += `
*╰═════════════❂* \n`
    }

    menuMsg += `           
*—————✺✺✺✺—————*
*Made in kenya with Love*🇰🇪  
 *BY 4ORTY6YX OFFICIAL*                                       

`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "developed by 4orty6yx official" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*4ORTY6YX OFFICIAL*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
