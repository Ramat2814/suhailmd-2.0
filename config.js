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
global.flush = process.env.FLUSH   || "True"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_23_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDUsXG4gICAgICAgIDI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid2dUOXVEdCsrVWpNbnFWMkE3Nzd4Y3BqSVRoODBlUjB0MUs0QjFmN3k3cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQyMTQ1OTIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QkU0QjUwRDkyMjhGRkQwMTBCQjdCQTdEMzU5OEZCRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQxMDcwMzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNnBoZ2dadVNURWVnN2hzZW5qVHBVd1wiLFxuICBcInBob25lSWRcIjogXCJmMzBlZGQxOS02ZTNiLTQ0MmMtOTZkZi03NjJkNjQ3YzJlYTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMixcbiAgICAgIDI0NCxcbiAgICAgIDc0LFxuICAgICAgMTcxLFxuICAgICAgNjksXG4gICAgICAxMDksXG4gICAgICAxMzQsXG4gICAgICAyMjksXG4gICAgICAxMzUsXG4gICAgICA5MCxcbiAgICAgIDk2LFxuICAgICAgMTEyLFxuICAgICAgNDEsXG4gICAgICA4NSxcbiAgICAgIDgsXG4gICAgICA3NyxcbiAgICAgIDIxMSxcbiAgICAgIDIzNCxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAxNjYsXG4gICAgICA4NSxcbiAgICAgIDIzOCxcbiAgICAgIDIwMSxcbiAgICAgIDIzOCxcbiAgICAgIDI0NixcbiAgICAgIDIyMCxcbiAgICAgIDE3OCxcbiAgICAgIDIzNyxcbiAgICAgIDIwMSxcbiAgICAgIDI0NyxcbiAgICAgIDM0LFxuICAgICAgMTYzLFxuICAgICAgMyxcbiAgICAgIDQzLFxuICAgICAgMTU4LFxuICAgICAgMjE0LFxuICAgICAgMjcsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDZUMUZROVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDIxNDU5MjE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJhbWFsaWNpb3VzKFJhbWF0ZmFzaGlvbmRlc2lnbmVyKVwiLFxuICAgIFwibGlkXCI6IFwiOTE3ODM2MTk1MDI2Njo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3VDRIOFFqTC94dWdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRWdtY3VBU05BV1MvaXlsclJaQnJDb3JuY0tvUU9raGEva1ZFbGRCblNpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0N0FaV1ZOeERSQ0E2T0NYQ1pjdTBkVVVPcXRLcVE2cmxCNDFoNWJ0S0NxT3JWUHNadjk2SHlkVjc2ZXJIRVlLaGQxQnJjSVZnME1rZ1pHTTdXUUNEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQSGdYMDRhVzJGZGpPaTk3OGFTVEtrcndNNEEweDRKTmZpclU1SUppb1g0Lzk2cUNOM2dONWJ4YW4yQ29XbFFnYVgxUzhpRUhZdUlVeXRmaVJ2YnpBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQyMTQ1OTIxOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxMDcwMjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
