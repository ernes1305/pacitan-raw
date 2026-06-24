# PACITAN RAW — situs arsip skena

Situs statis (framework **Astro**) untuk arsip & kebangkitan skena bawah tanah Pacitan.
Ringan (zero-JS by default), cepat, mudah di-deploy gratis.

## Jalankan lokal
```bash
npm install
npm run dev        # buka http://localhost:4321
```

## Build produksi
```bash
npm run build      # output ke ./dist
npm run preview    # cek hasil build
```

## Struktur
```
src/
  data/bands.js        # SEMUA data band/entitas + tracklist Vol.1 (edit di sini)
  layouts/Base.astro   # kerangka halaman (nav, footer, <head>)
  pages/index.astro    # halaman utama (hero, skena, grid band, Vol.1)
  pages/band/[slug].astro  # halaman profil tiap band (otomatis dari data)
  styles/global.css    # tema zine/DIY (hitam-merah)
public/favicon.svg
```

## Cara menamb/edit band
Cukup edit array `bands` di `src/data/bands.js`. Tiap entri otomatis dapat
halaman sendiri di `/band/<slug>/` dan muncul di grid sesuai `era`.

Foto cover memakai thumbnail Google Drive (`drive.google.com/thumbnail?id=...`).
Kalau ada yang gagal muat / ingin permanen: taruh gambar di `public/img/` dan
ubah `cover` jadi `/img/namafile.jpg`.

## Deploy gratis (pilih satu)
- **Netlify / Vercel**: hubungkan repo, build command `npm run build`, publish dir `dist`.
- **GitHub Pages**: aktifkan `@astrojs/github-pages` atau upload folder `dist`.

Ingat: ubah `site:` di `astro.config.mjs` ke domain final.
