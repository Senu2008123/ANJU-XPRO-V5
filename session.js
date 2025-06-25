//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUY1dXBXQ2lsTnNGcStseFZNdDd2VjYyWE5OaXliYTh6NnAyM1dYaUhrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaE1sQjBZL3pUYXowQm8zR0NQTzlGN1NWWUgvU01EeUdpM1JxeW1pNERDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS0RCYjArWno2MHozVUlzNVFOZHM4bEE2N3JISnY3VE03eWRGZllEMWxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUS0tYT2g3MXpPbmhnVVNKVVk5ZXMzQ2NhdG5nS3VrMXAzYklKSmRnOGxNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDSkJRcWF1WmhrTXhQYitmMW9abkRHcnZlTkNzUFhwbk1MNzFTeUNYbmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFeW90cENuRWpqT3FiVjhxcnoySWNocmZ3TERRNzM2SzRlcXJyTExrUkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUp5MUt3U2xNbEk4bGxMbWxNR3VocWxaU3lWRXpoeXdtTC9BM1BVUkVsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkhGUEZLSkF3N3JBeGVsWDZlWFE2OFdvTkpCcFlXNWVyemdiNlBJTThqdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl1Z0s5WnVNWm8vOVJIY2pCcUpDWm9PTGszTnpPOFBRVlFXQnpSSkdYYk92S2VlbGxXK3pnSDYxR1FFeFNsSTFwd1M5NXM4dGhQdFp0NGRkZDBKVkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6IjVFcjY1OEhwYXN2L25pRjR6OVBZN3A1TGk0dGZiL1Z5UXhna0V5WmxtakU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjUyMDM4OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEQyMTcyMzkyQzI2MEFDQTE4Q0IxQTQxQzFBNzA1NUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDg4NTg1Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjUyMDM4OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDQ3Qzg3M0JGRDUwRjVGMTlCMkE1QjkyNzQxNTJCQkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDg4NTg1Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibk1hOGVwV3lSS2VKZnlXN1dKc1VMZyIsInBob25lSWQiOiI5YWM3ZTYyYi02ODRkLTRjOTUtYmEyZS04NzNkODVjZjZiYzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXBwblVLMnNaZ1NPMHdLdVd4Uis0TlRycnRvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii92QU9QK2xlODkzUXBQb294RkxWZFp2bUxSOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzTVZGQVBNNiIsIm1lIjp7ImlkIjoiOTQ3MjUyMDM4OTA6MTVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDYzMTI5NTk5MzA0NTk6MTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOU0E5cTBIRU1yTDhjSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMbSt1dzNxdUNTbUcvSXBFZ20vVzBuT2NFZWI5NWZlZVNxVm1CWno0TEhRPSIsImFjY291bnRTaWduYXR1cmUiOiIwbmNNYUtIQVoxbDIwdlI4NVkzZUFjSFNhM25PaXNRVUdIU2QrZWw5cE1wODE0dG1pU3lvZ1BhN1FBMFRwbUVaN3AyVjBwa2VpZDVuVkNqUGtZOXJDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoib254VndBRFlnOXdjQ1RqWVpjMFFtL05KQ3pBSTVWZHQ3eUd3TDVXTVpwNDR3L2dzUTNqdW9VZnJhVVRpOWxVT2VJSThLbnIyNHlXaWFCSXA1MFEwQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNTIwMzg5MDoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTNXZyc042cmdrcGh2eUtSSUp2MXRKem5CSG0vZVgzbmtxbFpnV2MrQ3gwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA4ODU4NDcsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQSWIifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94785203890",
  PASSWORD: 
    process.env.PASSWORD || "@Senura123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94725203890", "94769714218"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
