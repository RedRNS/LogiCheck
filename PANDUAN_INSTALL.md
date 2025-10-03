# 🇮🇩 Panduan Instalasi LogiCheck

## 🚀 Cara Install & Jalankan (3 Langkah)

### 1️⃣ Install Semua Dependencies

Cukup jalankan satu command ini:

```bash
npm run install:all
```

Command ini akan otomatis install:
- Dependencies root project
- Dependencies server (backend)
- Dependencies client (frontend)

### 2️⃣ Setup API Key

**Tidak perlu setup .env lagi!** API key sekarang diatur langsung di website.

1. **Jalankan aplikasi dulu** (lihat langkah 3)
2. **Buka website** di `http://localhost:5173`
3. **Klik menu "Settings"** di navigasi
4. **Dapatkan API Key:**
   - Buka https://aistudio.google.com/app/apikey
   - Login dengan Google account
   - Klik "Create API Key"
   - Copy API key yang didapat
5. **Paste API key** di halaman Settings
6. **Klik "Test Key"** untuk verifikasi
7. **Klik "Save API Key"**

✅ **API Key disimpan di browser kamu** (localStorage), tidak di server!

🔐 **Keamanan:**
- API key hanya tersimpan di browser kamu
- API key tidak pernah dikirim ke server LogiCheck
- Key langsung dikirim dari browser ke Google Gemini API

### 3️⃣ Jalankan Aplikasi

Buka **2 terminal** (Command Prompt atau PowerShell):

**Terminal 1 - Backend:**
```bash
npm run dev:server
```
✅ Backend jalan di `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
npm run dev:client
```
✅ Frontend jalan di `http://localhost:5173`

### 🎉 Selesai!

Buka browser kamu dan akses: **http://localhost:5173**

---

## 📋 Daftar Command yang Tersedia

```bash
# Install
npm run install:all       # Install semua dependencies

# Development (auto-reload)
npm run dev:server        # Jalankan backend
npm run dev:client        # Jalankan frontend

# Production
npm run start:server      # Jalankan backend (tanpa auto-reload)
npm run build:client      # Build frontend untuk production
```

---

## ❓ Troubleshooting

### Masalah: "npm is not recognized"
**Solusi:** Install Node.js dari https://nodejs.org/ lalu restart terminal

### Masalah: Port sudah dipakai
**Solusi:** Ubah PORT di `server/.env` jadi port lain (misalnya 3002)

### Masalah: API Key error
**Solusi:** 
- Cek API key di `server/.env` sudah benar
- Pastikan ada quota di Google AI Studio
- Restart server setelah ganti API key

### Masalah: Dependencies gagal install
**Solusi:**
```bash
npm cache clean --force
npm run install:all
```

---

## 🆘 Butuh Bantuan?

- Baca dokumentasi lengkap: [README.md](./README.md)
- Quick Start (English): [QUICK_START.md](./QUICK_START.md)
- Troubleshooting: [docs/TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)
