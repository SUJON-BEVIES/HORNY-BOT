module.exports.config = {
	name: "uns", "😾"
	version: "1.0.5",
	permission: 2,
	credits: "Nayan",
	prefix: true,
	description: "ban or unblock users", "msg teact emuji 😾"
	category: "react message 😾"
	usages: " ",
	cooldowns: 5
};


module.exports.languages = {
	"vi": {
		"returnCant": "Không thể gỡ tin nhắn của người khác.",
		"missingReply": "Hãy reply tin nhắn cần gỡ."
	},
	"en": {
		"returnCant": "Can't to unsend message from other user.",
		"missingReply": "Reply to the message you want to unsend.",
		"missingmsg": "React to the message you want to unsend."
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply", "message_react") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messegeReact.messageID);
	}
