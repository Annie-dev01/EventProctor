const Event = require("events");
const { generateQrCode } = require("../utils/qrcode");
const { sendEmailWithAttachment } = require("../utils/sendMail");
const PubSub = new Event();

PubSub.on("qrMail", async (attendee) => { 
    const qrCodeFileName = await generateQrCode(attendee)
    console.log({qrCodeFileName})
   await sendEmailWithAttachment( attendee.email, qrCodeFileName)
})

module.exports = PubSub;