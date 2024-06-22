module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
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
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐂𝐫𝐞𝐝𝐢𝐭 𝐁𝐲 𝐍𝐢𝐬𝐚𝐧 𝐄𝐝𝐢𝐭𝐳


𝐍𝐚𝐦𝐞       : 𝐍𝐢𝐬𝐚𝐧 𝐗 𝐋𝐢𝐬𝐚 𝐁𝐎𝐓
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐍𝐢𝐬𝐚𝐍 𝐗 𝐄𝐝𝐢𝐭𝐳
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐅𝐚𝐫𝐢𝐝𝐠𝐨𝐧𝐣, 𝐂𝐡𝐚𝐧𝐝𝐩𝐮𝐫
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐂𝐡𝐚𝐧𝐝𝐩𝐮𝐫, 𝐂𝐡𝐢𝐭𝐭𝐚𝐠𝐨𝐧𝐠
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞 𝐚𝐜𝐢 𝐚𝐤𝐭𝐚 𝐦𝐚𝐢𝐲𝐚 𝐤𝐡𝐮𝐢𝐣𝐚 𝐝𝐞☹︎
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : nisaneditz@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801775602198
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/@nisan_editz198
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/nisan.editz2005`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100000959749712/picture?height`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
