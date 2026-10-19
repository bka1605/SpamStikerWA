const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const path = require('path');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Silakan scan QR di atas menggunakan WhatsApp HP Anda.');
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

client.on('ready', async () => {
    console.log('Bot Gacor Siap! Berjalan dengan stiker ACAK dan jeda aman 5-8 detik.');

    // ID grup tujuan Anda
    const targetChatId = '120363430742233811@g.us'; 
    
    let count = 0;
    // Dengan jeda rata-rata 6.5 detik, 600 stiker akan habis dalam waktu sekitar 1 jam lebih sedikit
    const maxStickers = 180; 

    // 1. DAFTAR STIKER: Tambahkan atau kurangi nama file stiker Anda di sini
    const daftarStiker = [
        'stikerClappingCat.webp',
        'stikerKucingPray.webp',
        'stikerSapi.webp',
        'stikerKucingMewing.webp',
        'stikerLizard.webp',
        'stikerRispek.webp'
    ];

    while (count < maxStickers) {
        // Pembuat jeda acak 5-8 detik
        const randomDelay = Math.floor(Math.random() * 3000) + 5000;
        await sleep(randomDelay);

        try {
            // 2. LOGIKA ACAK: Memilih salah satu stiker dari daftar secara acak
            const indexAcak = Math.floor(Math.random() * daftarStiker.length);
            const namaStikerTerpilih = daftarStiker[indexAcak];

            // Membaca file stiker yang terpilih
            const media = MessageMedia.fromFilePath(path.join(__dirname, namaStikerTerpilih));

            // Kirim stiker ke grup
            await client.sendMessage(targetChatId, media, { sendMediaAsSticker: true });
            
            count++;
            console.log(`[${count}/${maxStickers}] Terkirim: "${namaStikerTerpilih}". Jeda berikutnya: ${(randomDelay/1000).toFixed(1)} detik.`);
        } catch (err) {
            console.error('Gagal mengirim stiker:', err.message || err);
            await sleep(5000); 
        }
    }

    console.log('Bot berhenti otomatis setelah memenuhi seluruh kuota target stiker.');
});

client.initialize();
