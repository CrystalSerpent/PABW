# PABW — Muchamad Aril Kurniawan — 25523115

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: Masakan yang Pernah Saya Buat.

- Judul halaman: Masakan Yang Saya Buat
- Deskripsi: Halaman ini menampilkan beberapa masakan yang pernah saya buat.
- Tautan navigasi: Daftar Masakan, Tambahkan Masakan, Tentang Saya
- Dua bagian utama: Daftar Masakan, Tambahkan Masakan
- Kolom tabel: masakan, keterangan, dokumentasi
- Kolom form: nama masakan, lama memasak, tanggal dibuat, cerita singkat
- Gambar: Katsu-Curry.jpg, Semur-daging.png, ayam-dengan-telur.png

## Catatan penggunaan AI

Dibantu AI dalam menentukan struktur dan rencana isi halaman, design token, serta pengecekan konsistensi HTML/CSS. Isi, topik, dan dokumentasi masakan ditentukan sendiri.

## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang digunakan: `tokens.css`, `base.css`, `layout.css`, `komponen.css`, dan `tema.css`.
- Warna utama: terracotta `#A63D17`, dipilih agar cocok dengan tema galeri masakan rumahan.
- Tema gelap memakai nilai semantik yang berbeda agar tetap nyaman dibaca dan kontras.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#A63D17` | tombol, tautan, dan garis fokus |
| `--color-fg` | `#2B1A12` | teks utama |
| `--color-bg` | `#FFF8F0` | latar halaman |
| `--radius-md` | `0.875rem` | sudut kartu, tombol, dan isian |
| `--space-4` | `1rem` | jarak standar antar elemen |

Kriteria selesai saya: mengubah satu token warna utama di `tokens.css` harus mengubah tombol, tautan, dan garis fokus tanpa menyunting berkas komponen.

## Worksheet 8 — JavaScript Modern dan Struktur Data

- Folder pekerjaan: `worksheet-p8/`.
- Data halaman masakan disimpan di `worksheet-p8/js/app.js` sebagai objek `profil` dan array of object `daftarProyek`.
- Halaman menggunakan `map`, `filter`, dan `find`; dua fungsi murni yang digunakan adalah `buatPerkenalan` dan `formatKeahlian`.
- Halaman dibuka melalui server lokal agar skrip modul dapat berjalan.

## Catatan penggunaan AI Worksheet 8

AI membantu menyiapkan struktur awal JavaScript, menjelaskan fungsi dan array methods, serta mengecek konsistensi HTML/CSS. Isi topik, data masakan, dokumentasi, dan penyesuaian akhir halaman ditentukan serta diperiksa sendiri.

## Worksheet 9 — DOM, Events, dan Interaktivitas

- Folder pekerjaan: `worksheet-p9/`.
- `js/app.js` menyimpan data dan fungsi murni (diekspor), `js/dom.js` mengisi halaman dan menangani event.
- Daftar masakan dan tabel ringkasan dibuat dari array dengan `createElement` dan `textContent`, tidak ditulis manual di HTML.
- Fungsi `render(daftar)` selalu mengosongkan container lebih dulu dan menampilkan pesan saat kategori kosong.
- Tombol filter (Semua, Gorengan, Berkuah, Kue) dilayani satu listener di parent `#filter` dengan `event.target.closest("button")`.
- Form memakai `preventDefault`, validasi per field dengan `trim()`, pesan galat per field, dan tombol kirim ditahan sampai semua isian valid.

## Catatan penggunaan AI Worksheet 9

AI dipakai sebagai pendamping belajar: membantu memahami instruksi worksheet, memberi contoh pola render dan event delegation, serta membantu mengecek kode. Topik, data masakan, dan pemeriksaan akhir halaman tetap saya lakukan sendiri.
