// api.js: lapisan data. Hanya file ini yang memanggil fetch.
// File ini tidak menyentuh halaman; yang mengisi halaman ada di dom.js.

// Alamat API ditulis sekali saja di sini. API publik, tanpa API key.
const URL_API = "https://dummyjson.com/recipes";

// Mengambil resep ayam dari server, mengembalikan array resep.
export async function ambilResep() {
  try {
    const response = await fetch(`${URL_API}/search?q=chicken`);
    console.log("status", response.status, "ok", response.ok);

    // fetch tidak melempar error untuk status 404/500, jadi dicek sendiri.
    if (!response.ok) {
      throw new Error(`Server membalas dengan status ${response.status}`);
    }

    const data = await response.json(); // teks JSON -> objek
    return data.recipes;
  } catch (error) {
    console.error("Gagal memuat resep:", error.message);
    throw error; // diteruskan ke pemanggil (dom.js) supaya ditampilkan di halaman
  }
}

// Mengirim masakan baru ke server (DummyJSON hanya menyimulasikan penyimpanan).
export async function kirimMasakan(masakan) {
  try {
    const response = await fetch(`${URL_API}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(masakan), // objek -> teks JSON
    });

    if (!response.ok) {
      throw new Error(`Server membalas dengan status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Gagal mengirim masakan:", error.message);
    throw error;
  }
}
