# Website PT Solo Logo Indonesia

Situs statis (Astro) dengan panel admin Decap CMS di `/admin/`.

## Coba di komputer sendiri

```
npm install
npm run dev          # website di http://localhost:4321
npm run cms          # (terminal kedua) admin lokal di http://localhost:4321/admin/
```

## Struktur konten (semua bisa diedit lewat /admin/)

| Menu admin | Isi | Lokasi file |
| --- | --- | --- |
| Halaman | Beranda, Tentang Kami, Kontak, dan halaman baru, disusun dari blok | `src/content/halaman/*.md` |
| Berita | Artikel | `src/content/berita/*.md` |
| Produk | 29 produk | `src/content/produk/*.md` |
| Lowongan | Lowongan kerja | `src/content/lowongan/*.md` |
| Pengaturan | Logo, ikon, menu, alamat, WhatsApp, medsos, deskripsi kategori | `src/data/site.json` |

Jenis blok: Hero, Judul halaman, Teks, Teks dengan foto, Galeri, Daftar layanan, Kategori produk,
Produk unggulan, Berita terbaru, Banner lowongan, Ajakan dengan tombol, Alamat dan form kontak.
Field teks punya batas karakter supaya tampilan tetap rapi. Nama halaman `beranda`, `produk`,
`berita`, dan `karier` sudah dipakai sistem.

## Online-kan (Cloudflare Pages)

1. Upload folder ini ke repo GitHub baru.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → hubungkan repo.
   Build command: `npm run build`, output: `dist`.
3. Cek hasilnya di alamat `*.pages.dev`.
4. Hubungkan domain `solologoindonesia.com` (Custom domains). Kalau email domain masih dipakai,
   pastikan record MX ikut disalin.
5. Panel admin butuh login GitHub lewat OAuth. Di luar Netlify ini perlu satu worker kecil
   (misalnya `sveltia-cms-auth`). Setelah dibuat, isi `repo` dan `base_url` di `public/admin/config.yml`.

`public/_redirects` sudah memetakan alamat produk lama (WordPress) ke alamat baru supaya link lama
dan hasil Google tidak putus.

## Yang masih perlu diisi

- Data produk selain Pentacol dan Tufordi (bahan aktif, sasaran, deskripsi).
- Semua foto (lihat dokumen "Daftar Kebutuhan Gambar").
- Nomor WhatsApp sales di Pengaturan, dipakai form kontak dan tombol tanya produk.
- Logo, ikon, dan gambar share: upload lewat Pengaturan di /admin/.
