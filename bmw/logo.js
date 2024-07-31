const { zokou } = require("../framework/zokou");
var mumaker = require("mumaker");
zokou({ nomCom: "hacker",
    categorie: "🎨Logo", reaction: "👨🏿‍💻" }, async (origineMessage, zk, commandeOptions) => {
    const { prefixe, arg, ms, repondre } = commandeOptions;
    if (!arg || arg == "") {
        repondre("EXAMPLE :  " + prefixe + "hacker 4orty6yx");
        return;
    }
    try {
        let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
        let anu = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", arg); //
        //
       // let res = Object.values(anu)[3];
        // console.log("&€"+res);
      //  let lien = "https://e1.yotools.net" + res;
        repondre("*processing*...");
        await zk.sendMessage(origineMessage, { image: { url:anu.image}, caption: "\t LOGO BY 4ORTY6YX-OFFICIAL-MD" }, { quoted: ms });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});
zokou({ nomCom: "dragonball", categorie: "🎨Logo", reaction: "🐉" }, async (dest, zk, commandeOptions) => {
    let { arg, repondre, prefixe, ms } = commandeOptions;
    try {
        const noArgMsg = `*_EXAMPLE *:  ${prefixe}dragonball 4orty6yx alunya`;
        //  if(arg=='') {await zok.sendMessage(dest,{text:noArgMsg},{quoted:infoMessage}); return;}
        if (arg == '' || !arg) {
            repondre(noArgMsg);
            return;
        }
        var lienMaker = "https://ephoto360.com/tao-hieu-ung-chu-phong-cach-dragon-ball-truc-tuyen-1000.html";
        var lienMaker2 = "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html";
      
       
        const imgInfo = await mumaker.ephoto(lienMaker2, arg.join(' '));
       
        await zk.sendMessage(dest, { text: " \t *Generating Logo* ..." }, { quoted: ms });
       // var idImg = Object.values(imgInfo)[3];
       
        await zk.sendMessage(dest, { image: { url: imgInfo.image }, caption: "\t LOGO BY 4ORTY6YX-OFFICIAL-MD" }, { quoted: ms });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});
////////////////////////////
zokou({ nomCom: "naruto", categorie: "🎨Logo", reaction: "⛩" }, async (dest, zk, commandeOptions) => {
    let { ms, arg, repondre, prefixe } = commandeOptions;
    try {
        if (!arg || arg == '') {
            repondre("*_EXAMPLE : * " + prefixe + "naruto 4orty6yx");
            return;
        }
        var nar = "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html";
        //let img= await //mumaker.textpro('https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html',arg);
        repondre("*Generating Logo...*");
        var radio2 = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6";
        var img = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", arg.join(' '));
        
        await zk.sendMessage(dest, { image: { url: img.image }, caption: "\t\t *LOGO BY 4ORTY6YX-OFFICIAL-MD*" }, { quoted: ms });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});


////////////////////
zokou(
  {nomCom:"boom",categorie:
    "🎨Logo",reaction:"💥"},async(dest,zk,commandeOptions)=>{

    let {ms,repondre,prefixe,arg}=commandeOptions;

        if(!arg||arg=="")
        {
   
          repondre(`  EXAMPLE :* ${prefixe}boom Beltah`)
          return ;
        }
       try{
              var radio2 = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6";
         let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
var lien="https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html";
        console.log(arg)
         var img =await mumaker.ephoto(lien,arg)

        //var idImg = Object.values(img)[3];
       // var lienImage = "https://e1.yotools.net/" + idImg; 

  /* let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
         var v="https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html";
         var c="https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html"
        let anu = await mumaker.ephoto4(v, arg, radio);      
         let res = Object.values(anu)[3];*/
        // console.log("&€"+res);
       // let lien = "https://e1.yotools.net" + res;
         

repondre("*processing logo ...*")
         await zk.sendMessage(dest,{image:{url:img.image},caption:"\t *LOGO BY 4ORTY6YX-OFFICIAL-MD*"})
         
        // await zk.sendMessage(dest,{image:{url:lienImage},caption:"\t *LOGO BY 4ORTY6YX-OFFICIAL-MD*"})
         


       }catch(e){repondre("🥵🥵 "+e)}
    
    }
)
//water
zokou({nomCom:"water",categorie:"🎨Logo",reation:"💦"},async(dest,zk,commandeOptions)=>{

  
var {ms,repondre,arg,prefixe}=commandeOptions;
  if(!arg||arg=="")
  {
    repondre(`${prefixe}water zokou`)
    return;
  }
  try{
    var lien ="https://en.ephoto360.com/create-water-effect-text-online-295.html";
    var img =await mumaker.ephoto(lien,arg);
    repondre("*processing logo ...*")
    await zk.sendMessage(dest,{image:{url:img.image},caption:"  *LOGO BY 4ORTY6YX-OFFICIAL-MD*"})
  }catch(e){repondre(`🥵🥵 ${e}`)}

});



zokou({nomCom:"purple",categorie:"🎨Logo",reaction:"🧳"},async(dest,zk,commandeOptions)=>{
  var {ms,repondre,prefixe,arg}=commandeOptions;
  
    try{
      if(!arg||arg=="")
  {
    repondre(prefixe+"purple zokou");return;}
      const lien="https://en.ephoto360.com/purple-text-effect-online-100.html"
      var img = await mumaker.ephoto(lien,arg);
      repondre("*processing logo ...*")
      await zk.sendMessage(dest,{image:{url:img.image},caption:"*LOGO BY 4ORTY6YX-OFFICIAL-MD* "});
    }catch(e){repondre(e)}
  
})

zokou({nomCom:"gold",categorie:"🎨Logo",reaction:"🧚🏿‍♀️"},async(dest,zk,commandeOptions)=>{


  let {ms,arg,prefixe,repondre}=commandeOptions;
  try{
      if(!arg||arg=="")
      {
        repondre(prefixe+"gold 4ORTY6YX-OFFICIAL-MD");return;
      }

    var lien="https://en.ephoto360.com/modern-gold-4-213.html";

    var img = await mumaker.ephoto(lien,arg);
   repondre("*processing logo ...*")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *LOGO BY 4ORTY6YX-OFFICIAL-MD*"},{quoted:ms})
  }catch(e){repondre(e)}
})


zokou({nomCom:"arena",categorie:"🎨Logo",reaction:"🥵"},async(dest,zk,commandeOptions)=>{


  let {ms,arg,prefixe,repondre}=commandeOptions;
  try{
      if(!arg||arg=="")
      {
        repondre(prefixe+"arena 4ORTY6YX-OFFICIAL-MD");return;
      }

    var lien="https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html";

    var img = await mumaker.ephoto(lien,arg.join(' '));
   repondre("*processing logo ...*")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *Logo by Bwm-Md*"},{quoted:ms})
  }catch(e){repondre(e)}
})

zokou({nomCom:"incandescent",categorie:"🎨Logo",reaction:"😋"},async(dest,zk,commandeOptions)=>{


  let {ms,arg,prefixe,repondre}=commandeOptions;
  try{
      if(!arg||arg=="")
      {
        repondre(prefixe+"incandescent 4ORTY6YX-OFFICIAL-MD");return;
      }

    var lien="https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html";

    var img = await mumaker.ephoto(lien,arg.join(' '));
   repondre("*processing logo ...*")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *LOGO BY 4ORTY6YX-OFFICIAL-MD*"},{quoted:ms})
  }catch(e){repondre(e)}
})


zokou({nomCom:"deadpool",categorie:"🎨Logo",reaction:"😋"},async(dest,zk,commandeOptions)=>{


  let {ms,arg,prefixe,repondre}=commandeOptions;
  try{
      if(!arg||arg=="")
      {
        repondre(prefixe+"deadpool 4ORTY6YX-OFFICIAL-MD");return;
      }

    var lien="https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html";

    var img = await mumaker.ephoto(lien,arg.join(' '));
   repondre("*processing logo ...*")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *LOGO BY 4ORTY6YX-OFFICIAL-MD*"},{quoted:ms})
  }catch(e){repondre(e)}
})