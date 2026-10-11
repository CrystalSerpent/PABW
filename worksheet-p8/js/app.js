const halaman = {
  eyebrow: "Galeri dapur rumahan",
  judul: "Masakan yang Saya Buat",
  deskripsi: "Halaman ini menampilkan masakan yang pernah saya buat di rumah.",
  eyebrowDaftar: "Pilihan masakan",
  judulDaftar: "Daftar Masakan yang Pernah Saya Buat",
  deskripsiDaftar: "Berikut beberapa masakan yang pernah saya dokumentasikan saat dibuat.",
  captionRingkasan: "Ringkasan masakan yang ditampilkan",
};

const profil = {
  nama: "Muchamad Aril Kurniawan",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const daftarProyek = [
  {
    judul: "Chicken Katsu Curry",
    keterangan: "Ayam katsu disajikan dengan nasi dan saus curry.",
    gambar: "Asset/Katsu-Curry.jpg",
    alt: "Sepiring chicken katsu curry dengan ayam berlapis tepung, nasi, kentang, dan wortel.",
    caption: "Chicken katsu curry dengan nasi dan saus curry.",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Masakan Berkuah",
    keterangan: "Masakan berkuah yang dimasak dalam panci.",
    gambar: "Asset/Semur-daging.png",
    alt: "Masakan berkuah berwarna cokelat dengan potongan bahan di dalam panci.",
    caption: "Masakan berkuah yang sedang dimasak dalam panci.",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Ayam Goreng dengan Telur",
    keterangan: "Ayam goreng yang dimasak bersama telur di wajan.",
    gambar: "Asset/ayam-dengan-telur.png",
    alt: "Potongan ayam berlapis tepung sedang dimasak bersama telur di dalam wajan.",
    caption: "Ayam goreng yang dimasak bersama telur di wajan.",
    tahun: 2026,
    selesai: false,
  },
  
];

const jumlahProyek = daftarProyek.length;

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const buatKartu = (proyek) => `
  <article class="kartu">
    <h3>${proyek.judul}</h3>
    <figure class="kartu-figure">
      <img class="kartu-image" src="${proyek.gambar}" alt="${proyek.alt}" width="800" height="600" loading="lazy">
      <figcaption>${proyek.caption}</figcaption>
    </figure>
  </article>
`;

const buatBarisRingkasan = (proyek) => `
  <tr>
    <th scope="row">${proyek.judul}</th>
    <td>${proyek.keterangan}</td>
    <td>${proyek.selesai ? "Tersedia" : "Belum tersedia"}</td>
  </tr>
`;

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
const proyekUtama = daftarProyek.find(
  (proyek) => proyek.judul === "Chicken Katsu Curry",
);
const proyekTerurut = [...daftarProyek].sort((a, b) =>
  a.judul.localeCompare(b.judul),
);

document.title = `${halaman.judul} | ${profil.nama}`;
document.querySelector("#eyebrow-header").textContent = halaman.eyebrow;
document.querySelector("#judul-halaman").textContent = halaman.judul;
document.querySelector("#deskripsi-header").textContent = halaman.deskripsi;
document.querySelector("#eyebrow-daftar").textContent = halaman.eyebrowDaftar;
document.querySelector("#judul-daftar").textContent = halaman.judulDaftar;
document.querySelector("#deskripsi-daftar").textContent = halaman.deskripsiDaftar;
document.querySelector("#caption-ringkasan").textContent = halaman.captionRingkasan;
document.querySelector("#katalog-masakan").innerHTML = daftarProyek.map(buatKartu).join("");
document.querySelector("#ringkasan-masakan").innerHTML = daftarProyek
  .map(buatBarisRingkasan)
  .join("");
document.querySelector("#tentang-saya-teks").textContent = `Halaman ini dibuat oleh ${buatPerkenalan(profil)} untuk tugas Pengembangan Aplikasi Berbasis Web.`;
document.querySelector("#keahlian-saya").textContent = `Keahlian yang dipelajari: ${formatKeahlian(profil.keahlian)}.`;

console.log("Judul proyek:", judulProyek);
console.log("Jumlah proyek:", jumlahProyek);
console.log("Proyek utama:", proyekUtama);
console.log("Perkenalan:", buatPerkenalan(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian));
console.table(daftarProyek);
console.table(proyekSelesai);
console.table(proyekTerurut);
