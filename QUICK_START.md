# 🚀 Quick Start - LogiCheck

Panduan cepat untuk menjalankan LogiCheck dalam 3 langkah mudah!

## 📦 1. Install Dependencies

Jalankan satu command untuk install semua dependencies (root, server, dan client):

```bash
npm run install:all
```

## ⚙️ 2. Setup Environment

**Good news!** Tidak perlu buat file `.env` lagi. API key sekarang diatur langsung di website!

1. Jalankan aplikasi dulu (lihat step 3 di bawah)
2. Buka browser di `http://localhost:5173`
3. Klik menu **Settings**
4. Masukkan Gemini API key kamu
5. Klik **Save API Key**

🔑 **Dapatkan API Key dari:** https://aistudio.google.com/app/apikey

💡 **Note:** API key tersimpan di browser localStorage, tidak di server. Sangat aman!

## ▶️ 3. Run the App

Buka **2 terminal** dan jalankan:

### Terminal 1 - Backend Server
```bash
npm run dev:server
```
Server berjalan di `http://localhost:3001`

### Terminal 2 - Frontend Client
```bash
npm run dev:client
```
Frontend berjalan di `http://localhost:5173`

✅ **Done!** Buka browser di `http://localhost:5173`

---

## 📝 Available Commands

| Command | Keterangan |
|---------|-----------|
| `npm run install:all` | Install semua dependencies (root + server + client) |
| `npm run dev:server` | Jalankan backend server (development mode) |
| `npm run dev:client` | Jalankan frontend client (development mode) |
| `npm run start:server` | Jalankan backend server (production mode) |
| `npm run start:client` | Jalankan frontend client |
| `npm run build:client` | Build frontend untuk production |

---

## 🔧 Troubleshooting

### "npm is not recognized"
- Install Node.js dari https://nodejs.org/
- Restart terminal setelah instalasi

### Port sudah digunakan?
```bash
# Ubah PORT di server/.env
PORT=3002
```

### Dependencies error?
```bash
# Clear cache dan install ulang
npm cache clean --force
npm run install:all
```

### API Key tidak bekerja?
- Pastikan API key sudah benar di `server/.env`
- Check quota di Google AI Studio
- Restart server setelah update .env

---

## 📚 More Info

- Full README: [README.md](./README.md)
- Architecture: [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)
- Troubleshooting: [docs/TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)


---

## Next Steps After Setup

1. **Try the Core Analyzer** - Go to http://localhost:5173/analyzer
2. **Practice in the Dojo** - Go to http://localhost:5173/dojo
3. **Use the Essay Clinic** - Go to http://localhost:5173/essay-clinic

For detailed documentation, see `SETUP_GUIDE.md`
