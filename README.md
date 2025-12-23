# Dondon Invitation Website

Website resmi untuk **Dondon Invitation**, layanan jasa cetak undangan pernikahan premium dan murah di Semarang. Website ini dirancang untuk memudahkan calon pengantin dalam melihat katalog, menghitung estimasi harga, dan melakukan pemesanan undangan secara online.

## 🚀 Fitur Utama

- **Katalog Produk**: Menampilkan berbagai model undangan hardcover dengan detail spesifikasi.
- **Kalkulator Harga Pintar**: Memungkinkan pengguna menghitung estimasi biaya berdasarkan model dan jumlah undangan yang diinginkan secara real-time.
- **Form Pemesanan Terintegrasi**: Formulir digital untuk pengisian data mempelai, akad, dan resepsi yang terintegrasi dengan WhatsApp.
- **Alur Pemesanan Jelas**: Panduan langkah demi langkah dari konsultasi hingga pengiriman.
- **Galeri & Testimoni**: Menampilkan portofolio hasil cetak dan ulasan dari pelanggan sebelumnya.
- **Responsive Design**: Tampilan yang optimal di berbagai perangkat (Desktop, Tablet, Mobile).

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: SVG Icons (Custom & Heroicons concept)
- **Deployment**: Vercel (Recommended)

## 📂 Struktur Project

```
web/
├── public/              # Aset statis (gambar, icon, svg)
├── src/
│   ├── app/             # Halaman-halaman website (App Router)
│   │   ├── order-form/  # Halaman form pemesanan
│   │   ├── layout.tsx   # Layout utama aplikasi
│   │   └── page.tsx     # Halaman beranda (Landing Page)
│   ├── components/      # Komponen UI reusable (Navbar, Hero, Forms, dll)
│   ├── data/            # Data statis (pricelist.json)
│   └── assets/          # Aset gambar yang diimport
├── ...
```

## 🏁 Cara Menjalankan Project

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda:

1.  **Clone Repository** (jika belum):
    ```bash
    git clone <repository-url>
    cd dondon_invitation/web
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    # atau
    bun install
    ```

3.  **Jalankan Development Server**:
    ```bash
    npm run dev
    # atau
    yarn dev
    # atau
    pnpm dev
    # atau
    bun dev
    ```

4.  **Buka di Browser**:
    Buka [http://localhost:3000](http://localhost:3000) untuk melihat website.

## 📝 Alur Kerja Pemesanan (Sistem)

1.  **Landing Page**: User melihat katalog dan memilih model.
2.  **Kalkulator Harga**: User memasukkan jumlah pesanan di komponen `PriceCalculator`.
3.  **Redirect**: Klik "Pesan Sekarang" akan mengarahkan user ke halaman `/order-form` dengan membawa data `model`, `qty`, dan `price` sebagai query parameter.
4.  **Pengisian Data**: User mengisi data detail pernikahan di `CustomerOrderForm`.
5.  **WhatsApp**: Data yang diisi akan diformat menjadi pesan WhatsApp otomatis dan dikirim ke admin Dondon Invitation.

## 🚀 Deployment

Project ini sangat mudah di-deploy menggunakan [Vercel](https://vercel.com).

1.  Push kode ke repository Git (GitHub/GitLab/Bitbucket).
2.  Import project ke Vercel.
3.  Vercel akan otomatis mendeteksi Next.js dan melakukan build & deploy.

---
**Dondon Invitation** - Cetak Undangan Hardcover Elegan & Murah di Semarang.