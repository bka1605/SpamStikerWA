const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Silakan scan QR di atas menggunakan WhatsApp HP Anda.');
});

client.on('ready', () => {
    console.log('\n=== BOT PENCARI ID GRUP AKTIF (PROTEKSI PENUH) ===');
    console.log('Buka HP/Opera GX Anda, lalu kirim pesan teks "!id" (tanpa kutip) di dalam grup target.');
    console.log('====================================================\n');
});

// Membaca pesan masuk atau keluar tanpa menggunakan fungsi getChat()
client.on('message_create', async (msg) => {
    // Kita cek apakah teks pesan mengandung kata !id
    if (msg.body && msg.body.trim() === '!id') {
        
        // WhatsApp mengelompokkan ID grup dengan akhiran @g.us
        // Kita lacak lokasi asal pesan tersebut dikirim
        const isFromGroup = msg.from.endsWith('@g.us');
        const isToGroup = msg.to.endsWith('@g.us');

        if (isFromGroup || isToGroup) {
            const groupID = isFromGroup ? msg.from : msg.to;
            
            console.log('\n=============================================');
            console.log(' BERHASIL MENDAPATKAN ID GRUP!');
            console.log(` ID TARGET : ${groupID}`);
            console.log('=============================================\n');
            console.log('Salin ID berakhiran @g.us di atas untuk skrip spam Anda.');
        } else {
            console.log('\nPesan !id terdeteksi di chat pribadi. Ingat, ketik perintahnya DI DALAM GRUP ya!');
        }
    }
});

client.initialize();
