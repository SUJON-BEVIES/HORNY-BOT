module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "horny",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`আসসালামু আলাইকুম
--------------------------------------------
Credit: YOUR DAD ARIYAN💀


𝐍𝐚𝐦𝐞       : HORNY SARA🫦
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : SARA BB'E
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: TUI JAINA KI KORBI VAI?🙂
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: TMR BASHAR PICHE
𝐆𝐞𝐧𝐝𝐞𝐫.   : FEMALE
𝐀𝐠𝐞           : TOR BORO AMI😾
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : PANIR MOTO PURE SINGLE😼
𝐖𝐨𝐫𝐤        : HORNY MOOD🥵
𝐆𝐦𝐚𝐢𝐥       : NAI VAI KHOMA🙂🙏
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: AGE I LOVE YOU KO😾👍
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : AMI GORIB VAI
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : লিংক দিম্না😿`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://imgur.com/a/8g96rmA`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
