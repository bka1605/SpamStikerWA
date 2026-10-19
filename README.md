# 🤖 WhatsApp Sticker Spammer Bot (Anti-Ban Version)

Script otomatisasi berbasis **Node.js** untuk mengirim satu stiker WhatsApp secara berkala ke target nomor tertentu secara otomatis di latar belakang (*background*). Script ini dilengkapi dengan **fitur jeda waktu acak (random delay)** untuk meniru perilaku manusia asli guna meminimalkan risiko akun Anda terkena blokir (*banned*) oleh sistem WhatsApp.

## ✨ Fitur Utama
* **Berjalan di Latar Belakang:** Anda tetap bisa menggunakan PC/Laptop untuk aktivitas lain (bermain game, browsing, kerja) tanpa terganggu.
* **Fitur Anti-Ban (Jeda Waktu Acak):** Mengirim stiker secara dinamis dalam rentang waktu **10 hingga 30 detik sekali** secara acak.
* **Pembatas Otomatis (Auto-Stop):** Bot akan mati otomatis setelah mencapai batas pengiriman tertentu (diatur untuk **~1 jam / 180 stiker**).
* **Gratis:** Menggunakan sistem *headless browser* melalui WhatsApp Web, tidak membutuhkan API resmi berbayar.

---

## 🛠️ Persyaratan Sistem
Sebelum memulai, pastikan komputer Anda sudah terpasang:
1. **Node.js** (Versi LTS Terbaru) -> Unduh di https://nodejs.org/
2. **File Stiker** bernama `stiker.webp` yang ditaruh di dalam folder yang sama dengan script ini.

---

## 🚀 Langkah-Langkah Penggunaan

### 1. Menyiapkan Folder Proyek
1. Buat folder baru di komputer Anda (contoh nama folder: `bot-sticker`).
2. Masukkan file stiker yang ingin Anda kirim ke folder tersebut dan ubah namanya menjadi `stiker.webp`.
3. Buat file baru bernama `bot.js`, salin kode bot yang sudah Anda miliki ke dalamnya, lalu ganti bagian `targetChatId` dengan nomor tujuan Anda (contoh: `'6281556515758@c.us'`).

### 2. Menginstal Library yang Dibutuhkan
1. Buka **Command Prompt (CMD)** di Windows atau **Terminal** di Mac.
2. Masuk ke direktori folder proyek Anda menggunakan perintah `cd`. Contoh:
   ```bash
   cd Desktop/bot-sticker
   ```
3. Jalankan perintah berikut untuk mengunduh semua pustaka yang diperlukan:
   ```bash
   npm install whatsapp-web.js qrcode-terminal
   ```
   *Tunggu proses download selesai hingga terminal kembali memunculkan baris input baru.*

### 3. Menjalankan Bot (Trigger)
Untuk menghidupkan bot, jalankan perintah ini di dalam Terminal/CMD Anda:
```bash
node bot.js
```

### 4. Menhubungkan Akun WhatsApp
1. Setelah perintah di atas dijalankan, sebuah **Kode QR** besar berbasis teks akan muncul di dalam Terminal/CMD Anda.
2. Buka aplikasi WhatsApp di HP Anda.
3. Masuk ke menu **Perangkat Tertaut (Linked Devices)** -> Ketuk **Tautkan Perangkat (Link a Device)**.
4. Arahkan kamera HP Anda ke Kode QR yang ada di layar terminal komputer.
5. Setelah sukses terhubung, terminal akan menampilkan tulisan: 
   `Bot siap berjalan di background dengan jeda acak 10-30 detik!`

### 5. Membiarkan Bot Bekerja
Sekarang Anda bisa memperkecil (*minimize*) jendela Terminal/CMD tersebut. Bot akan otomatis mengirim stiker di latar belakang sistem dan akan berhenti sendiri setelah mengirim total 180 stiker (durasi kurang lebih 1 jam).

---

## 🛑 Cara Menghentikan Bot di Tengah Jalan
Jika Anda ingin mematikan bot secara paksa sebelum target selesai:
1. Buka kembali jendela Terminal/CMD tempat bot Anda berjalan.
2. Tekan kombinasi tombol **`Ctrl + C`** secara bersamaan pada keyboard Anda.
3. Jika muncul pertanyaan `Terminate batch job (Y/N)?`, ketik **`Y`** lalu tekan **Enter**. Bot akan langsung berhenti seketika.

---

## 💡 Tips & Troubleshooting
* **Error Sesi / Gagal Kirim:** Jika bot mendadak macet atau memunculkan pesan eror yang berulang, matikan bot (`Ctrl + C`), hapus folder tersembunyi bernama `.wwebjs_auth` dan `.wwebjs_cache` di dalam folder proyek Anda, lalu jalankan kembali perintah `node bot.js` dan lakukan scan QR ulang.
* **Jangan Gunakan Terlalu Agresif:** Pengaturan bawaan script ini (10-30 detik) sudah berada di batas toleransi aman. Jangan mempercepat jeda waktu menjadi di bawah 5 detik karena akun Anda berisiko besar terkena pemblokiran otomatis oleh algoritma anti-spam WhatsApp.