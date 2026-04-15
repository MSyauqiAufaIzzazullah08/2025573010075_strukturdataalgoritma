function kuadratBiasa(x) {
    return x * x; 
}

const kuadrat = (x) => {
    return x * x;
};

const kuadratRingkas = x => x * x;

console.log('=== Perbandingan Penulisan ===');
console.log('Biasa   :', kuadratBiasa(5));
console.log('Arrow   :', kuadrat(5));
console.log('Ringkas :', kuadratRingkas(5));

const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;

console.log('Luas 4x6 :', luas(4,6));
console.log(salam('Budi', 'Pagi'));

function LakukanOperasi(angka, operasiCallback) {
    console.log(`Angka awal: ${angka}`);
    const hasil = operasiCallback(angka);
    console.log(`Hasil setelah operasi: ${hasil}`);
}

console.log('\n=== Callback ===');

LakukanOperasi(7, kuadratRingkas);
LakukanOperasi(10, x => x + 100);
LakukanOperasi(20, function(x) {
    return x / 2;
});

console.log('\n=== setTimeout (Callback) ===');
console.log('Pesan 1: sebelum timer');

setTimeout(() => {
   console.log('pesan 3: ini dari dalam setTimeout (setelah 1 detik)'); 
}, 1000);

console.log('Pesan 2: setelah mendaftarkan timer');



// Latihan 2 : Pipeline Transformasi data


const keHurufBesar = (teks) => {
    return teks.toUpperCase();
};

const tambahSeru = (teks) => {
    return teks + '!!!';
};

const hitungKata = (teks) => {
    return teks.split(' ').length;
};

function prosesKalimat(kalimat, callback) {
    console.log(`\nKalimat awal: ${kalimat}`);
    const hasil = callback(kalimat);
    console.log(`Hasil setelah proses: ${hasil}`);
}


console.log('\n=== Latihan 2: Callback ===');

const kalimat = 'belajar javascript itu menyenangkan';
prosesKalimat(kalimat, keHurufBesar);
prosesKalimat(kalimat, tambahSeru);
prosesKalimat(kalimat, hitungKata);
prosesKalimat(kalimat, (teks) => teks.split('').reverse().join(''));