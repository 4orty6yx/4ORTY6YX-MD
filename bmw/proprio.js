const {zokou}=require("../framework/zokou")







zokou({nomCom:"reboot",categorie:"Bot owner",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for the Bot owner only");
  }

  const {exec}=require("child_process")

    repondre("*restarting ...*");

  exec("pm2 restart all");
  

  



})