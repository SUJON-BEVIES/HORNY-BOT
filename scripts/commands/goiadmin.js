module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "Horny",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61561264605347) {
    var aid = ["61561264605347"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Me দিস না আরিয়ান বস এর মন ভালো নেই আজকে!💔🥀", "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্সট করে নাহ🫂💔","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒","বসরে Mantion দিলে চুম্মাইয়া ঠোটের কালার change কইরা,লামু 💋😾😾🔨","এত ইমুশনাল কথা বলো তল দেশ দিয়ে অঝরে বৃষ্টি হচ্ছে আমার 😭😭","সুজন বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মেনশন নাহ দিয়া আরিয়ান বস রে একটা সালাম দে 😒 😏","Mention না দিয়ে আঙ্গুল চুষো বসে বসে","মেনশন দিসনা পারলে একটা গফ দে","Mention দিস না বাঁলপাঁক্না আরিয়ান প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
