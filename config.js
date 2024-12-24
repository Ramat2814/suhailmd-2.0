const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348142145921";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_15_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUwLFxuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlc4R3FuOEN0UTZZOXkxWGUvQlh4VGk4QXpqb3pta2pubWZrN3IrNWR5WjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRKSjJEcXY3Umw2bml6MjZTd2xhZWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODQzZjM3YTItOTM2NS00NjVlLTljNzMtZGEwMTcxMDIyMGY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgNTYsXG4gICAgICA5NCxcbiAgICAgIDEwMixcbiAgICAgIDc2LFxuICAgICAgMTk1LFxuICAgICAgMTcsXG4gICAgICAyMTMsXG4gICAgICAyNSxcbiAgICAgIDY0LFxuICAgICAgNDAsXG4gICAgICAxMjEsXG4gICAgICAyNTAsXG4gICAgICA0OCxcbiAgICAgIDE2NCxcbiAgICAgIDI0NSxcbiAgICAgIDIyNSxcbiAgICAgIDE3MSxcbiAgICAgIDEwOCxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMTY0LFxuICAgICAgMTU4LFxuICAgICAgMTEwLFxuICAgICAgMTQ5LFxuICAgICAgMTY0LFxuICAgICAgMjM5LFxuICAgICAgNTYsXG4gICAgICAyMjUsXG4gICAgICAyMSxcbiAgICAgIDIzMixcbiAgICAgIDIyNyxcbiAgICAgIDE0MSxcbiAgICAgIDE0OCxcbiAgICAgIDIyMyxcbiAgICAgIDIzMyxcbiAgICAgIDQyLFxuICAgICAgMTMwLFxuICAgICAgNjAsXG4gICAgICAxNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlY2SzFUTUNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDIxNDU5MjE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJSYW1hbGljaW91cyhSYW1hdGZhc2hpb25kZXNpZ25lcilcIixcbiAgICBcImxpZFwiOiBcIjkxNzgzNjE5NTAyNjY6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS9UNEg4UXV0aXJ1d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFZ21jdUFTTkFXUy9peWxyUlpCckNvcm5jS29RT2toYS9rVkVsZEJuU2lvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNvS2ZmZEpRYk5GVnZVUy9FakJ5QzM4eEhJMHg2L3VQT3VLSlJCUERpSUxzbUREeEVQeUE3YnR5YloyZzVacDhjYmhtaUEyVXVFYWRqdWcwWDd2OUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhsQTkyUzk0Zmk2SkpMbXNnaHJnR09lcjFUYzVPdlZkMlNFWGtaZDhEUnJiM2xFVnJ6NmhzdnVDZGdkVGVSaWpWRWsrOXdnN2p1Vi9uZHBQaStHVEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDIxNDU5MjE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUwNjA1NDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
