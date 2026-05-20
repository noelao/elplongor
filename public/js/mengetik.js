// 1. Siapkan kata-kata yang ingin ditampilkan bergantian
const kataKata = ["Saya akan lawan !!", "Jangan Lupa Subcribe ☝️😋", "belajar membuat Website", "When Yahh??","Coding itu bajingan👺!!"];

let indexKata = 0; // Untuk melacak kata ke-berapa di array
let indexKarakter = 0; // Untuk melacak huruf ke-berapa
let sedangMenghapus = false; // Status apakah sedang ngetik atau menghapus
const elemenTeks = document.getElementById("efek-ngetik");

function jalankanEfek() {
    // Ambil kata yang sedang aktif berdasarkan index
    const kataSekarang = kataKata[indexKata];

    // Jika sedang menghapus, kurangi huruf. Jika tidak, tambah huruf.
    if (sedangMenghapus) {
        elemenTeks.textContent = kataSekarang.substring(0, indexKarakter - 1);
        indexKarakter--;
    } else {
        elemenTeks.textContent = kataSekarang.substring(0, indexKarakter + 1);
        indexKarakter++;
    }

    // Atur kecepatan ngetik (Menghapus biasanya lebih cepat dari ngetik)
    let kecepatan = sedangMenghapus ? 50 : 100;

    // Logika ketika kata selesai diketik
    if (!sedangMenghapus && indexKarakter === kataSekarang.length) {
        // Tunda lebih lama (misal 2 detik) sebelum mulai menghapus
        kecepatan = 2000; 
        sedangMenghapus = true;
    } 
    // Logika ketika kata selesai dihapus (kosong)
    else if (sedangMenghapus && indexKarakter === 0) {
        sedangMenghapus = false;
        // Pindah ke kata berikutnya. Gunakan modulus (%) agar bisa kembali ke kata pertama
        indexKata = (indexKata + 1) % kataKata.length;
        // Tunda sejenak sebelum mulai ngetik kata baru
        kecepatan = 500; 
    }

    // Jalankan fungsi ini lagi dan lagi dengan kecepatan yang sudah diatur
    setTimeout(jalankanEfek, kecepatan);
}

// Mulai efeknya saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    jalankanEfek();
});