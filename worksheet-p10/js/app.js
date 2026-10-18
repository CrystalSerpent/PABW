// app.js: hanya data dan fungsi murni. File ini tidak menyentuh halaman.
// Bagian yang mengisi halaman ada di dom.js.

export const halaman = {
  eyebrow: "Galeri dapur rumahan",
  judul: "Masakan yang Saya Buat",
  deskripsi: "Halaman ini menampilkan masakan yang pernah saya buat di rumah.",
  eyebrowDaftar: "Pilihan masakan",
  judulDaftar: "Daftar Masakan yang Pernah Saya Buat",
  deskripsiDaftar: "Berikut beberapa masakan yang pernah saya dokumentasikan saat dibuat.",
  captionRingkasan: "Ringkasan masakan yang ditampilkan",
};

export const profil = {
  nama: "Muchamad Aril Kurniawan",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export const daftarProyek = [
  {
    judul: "Chicken Katsu Curry",
    kategori: "goreng",
    keterangan: "Ayam katsu disajikan dengan nasi dan saus curry.",
    gambar: "Asset/Katsu-Curry.jpg",
    alt: "Sepiring chicken katsu curry dengan ayam berlapis tepung, nasi, kentang, dan wortel.",
    caption: "Chicken katsu curry dengan nasi dan saus curry.",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Masakan Berkuah",
    kategori: "berkuah",
    keterangan: "Masakan berkuah yang dimasak dalam panci.",
    gambar: "Asset/Semur-daging.png",
    alt: "Masakan berkuah berwarna cokelat dengan potongan bahan di dalam panci.",
    caption: "Masakan berkuah yang sedang dimasak dalam panci.",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Ayam Goreng dengan Telur",
    kategori: "goreng",
    keterangan: "Ayam goreng yang dimasak bersama telur di wajan.",
    gambar: "Asset/ayam-dengan-telur.png",
    alt: "Potongan ayam berlapis tepung sedang dimasak bersama telur di dalam wajan.",
    caption: "Ayam goreng yang dimasak bersama telur di wajan.",
    tahun: 2026,
    selesai: false,
  },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

// Fungsi murni untuk filter: menerima array, mengembalikan array baru.
// "semua" berarti tidak ada yang disaring.
export const saringKategori = (daftar, kategori) =>
  daftar.filter((proyek) => kategori === "semua" || proyek.kategori === kategori);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
const proyekUtama = daftarProyek.find(
  (proyek) => proyek.judul === "Chicken Katsu Curry",
);
const proyekTerurut = [...daftarProyek].sort((a, b) =>
  a.judul.localeCompare(b.judul),
);

console.log("Judul proyek:", judulProyek);
console.log("Jumlah proyek:", daftarProyek.length);
console.log("Proyek utama:", proyekUtama);
console.log("Proyek selesai:", proyekSelesai.length);
console.table(proyekTerurut);
