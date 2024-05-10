const QRCode = require('qrcode');
const path = require('path');

const generateQrCode = async (attendee) => {
    try {
        const hashedData = JSON.stringify({
          //  id: attendee.id,
            firstName: attendee.firstName,
            lastName: attendee.lastName
            
        });

        const fileName = `${attendee.firstName}.png`;
        const filePath = path.join(__dirname, 'qr_codes', fileName); 

        // Generate QR code
        await QRCode.toFile(filePath, hashedData, {
            errorCorrectionLevel: 'H'
        });

        console.log('QR code saved:', filePath);
        return filePath; 
    } catch (err) {
        console.error('Error generating QR code:', err);
        throw err;
    }
};

module.exports = {
    generateQrCode
};
