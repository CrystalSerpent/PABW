import {
  halaman,
  profil,
  daftarProyek,
  buatPerkenalan,
  formatKeahlian,
  saringKategori,
} from "./app.js";

const katalog = document.querySelector("#katalog-masakan");
const ringkasan = document.querySelector("#ringkasan-masakan");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const form = document.querySelector("#form-masakan");
const tombolKirim = form.querySelector('button[type="submit"]');
const statusForm = document.querySelector("#status-form");

const fieldNama = document.querySelector("#nama-masakan");
const fieldDurasi = document.querySelector("#durasi");
const fieldTanggal = document.querySelector("#tanggal-memasak");
const fieldCatatan = document.querySelector("#catatan");

document.title = `${halaman.judul} | ${profil.nama}`;
document.querySelector("#eyebrow-header").textContent = halaman.eyebrow;
document.querySelector("#judul-halaman").textContent = halaman.judul;
document.querySelector("#deskripsi-header").textContent = halaman.deskripsi;
document.querySelector("#eyebrow-daftar").textContent = halaman.eyebrowDaftar;
document.querySelector("#judul-daftar").textContent = halaman.judulDaftar;
document.querySelector("#deskripsi-daftar").textContent = halaman.deskripsiDaftar;
document.querySelector("#caption-ringkasan").textContent = halaman.captionRingkasan;
document.querySelector("#tentang-saya-teks").textContent =
  `Halaman ini dibuat oleh ${buatPerkenalan(profil)} untuk tugas Pengembangan Aplikasi Berbasis Web.`;
document.querySelector("#keahlian-saya").textContent =
  `Keahlian yang dipelajari: ${formatKeahlian(profil.keahlian)}.`;

function buatKartu(proyek) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const figure = document.createElement("figure");
  figure.className = "kartu-figure";

  const gambar = document.createElement("img");
  gambar.className = "kartu-image";
  gambar.src = proyek.gambar;
  gambar.alt = proyek.alt;
  gambar.width = 800;
  gambar.height = 600;
  gambar.loading = "lazy";

  const keterangan = document.createElement("figcaption");
  keterangan.textContent = proyek.caption;

  figure.append(gambar, keterangan);
  kartu.append(judul, figure);
  return kartu;
}

function buatBarisRingkasan(proyek) {
  const baris = document.createElement("tr");

  const nama = document.createElement("th");
  nama.scope = "row";
  nama.textContent = proyek.judul;

  const keterangan = document.createElement("td");
  keterangan.textContent = proyek.keterangan;

  const status = document.createElement("td");
  status.textContent = proyek.selesai ? "Tersedia" : "Belum tersedia";

  baris.append(nama, keterangan, status);
  return baris;
}

function render(daftar) {
  katalog.textContent = ""; 

  if (daftar.length === 0) { 
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;

  const fragment = document.createDocumentFragment(); 
  daftar.forEach((proyek) => fragment.append(buatKartu(proyek)));
  katalog.append(fragment);
}

function renderRingkasan(daftar) {
  ringkasan.textContent = "";
  daftar.forEach((proyek) => ringkasan.append(buatBarisRingkasan(proyek)));
}


function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("active", aktif);
    tombol.setAttribute("aria-pressed", String(aktif));
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; 

  const kategori = tombol.dataset.category;
  tandaiTombolAktif(tombol);
  render(saringKategori(daftarProyek, kategori));
});

const aturan = new Map([
  [fieldNama, (field) => field.value.trim().length >= 3],
  [fieldDurasi, (field) => {
    const angka = Number(field.value);
    return field.value.trim() !== "" && Number.isInteger(angka) && angka >= 1 && angka <= 180;
  }],
  [fieldTanggal, (field) => field.value !== ""],
  [fieldCatatan, (field) => field.value.trim() !== ""],
]);

let sudahDicobaKirim = false;

function cekField(field) {
  const valid = aturan.get(field)(field);
  if (valid) {
    field.removeAttribute("aria-invalid");
  } else {
    field.setAttribute("aria-invalid", "true");
  }
  return valid;
}

function semuaValid() {
  return [...aturan.keys()].every((field) => aturan.get(field)(field));
}

form.addEventListener("input", (event) => {
  const field = event.target;
  if (!aturan.has(field)) return;

  cekField(field);
  statusForm.textContent = "";
  if (sudahDicobaKirim) {
    tombolKirim.disabled = !semuaValid();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  sudahDicobaKirim = true;

  const hasil = [...aturan.keys()].map((field) => cekField(field));
  const valid = hasil.every(Boolean);
  tombolKirim.disabled = !valid;

  if (!valid) {
    const fieldPertamaSalah = [...aturan.keys()].find(
      (field) => field.getAttribute("aria-invalid") === "true",
    );
    fieldPertamaSalah.focus();
    return;
  }

  statusForm.textContent = `"${fieldNama.value.trim()}" sudah dicatat. Terima kasih!`;
  form.reset();
  sudahDicobaKirim = false;
});

tandaiTombolAktif(barisFilter.querySelector('[data-category="semua"]'));
render(daftarProyek);
renderRingkasan(daftarProyek);
