const sgMail = require('@sendgrid/mail');
const path = require('path');
const fs = require('fs');


const sendEmailWithAttachment = async (toEmail, qrFilePath) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
    try {
        const msg = {
            to: toEmail,
            from: 'AttendifyQR <joshuatobiajagbe@gmail.com>', 
            subject: 'Your Personalized QR Code for this Event',
            html: `<p>Dear attendee,</p><p>Please find your personalized QR code attached.</p><p>Best regards,<br>Your Organization</p>`,
            attachments: [
                {
                    content: Buffer.from(fs.readFileSync(qrFilePath)).toString('base64'),
                    filename: path.basename(qrFilePath),
                    type: 'image/png',
                    disposition: 'attachment'
                }
            ]
        };

        await sgMail.send(msg);
        console.log(`Email sent to ${toEmail} with QR code attachment`);
    } catch (err) {
        console.error('Error sending email:', err);
        throw err;
    }
};

module.exports = {
    sendEmailWithAttachment
};
