function sapa() {
console.log('halo! Selamat datang di praktikum javascript.');
}
sapa();
sapa();

function sapaNama(nama) {
    console.log(`Halo,${nama}! Selamat belajar.`);
}
sapaNama('Budi');
sapaNama('Siti');

function tambah(angka1, angka2){
    const hasil = angka1 + angka2;
    return hasil;
}

const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7,13));

function hitung(nilai, pengali = 2) {
    return nilai * pengali;
}

console.log(hitung(5));
console.log(hitung(5, 3));

const pesanGlobal = 'Saya ada dimana saja';

function cekScope() {
    const pesanLokal = 'Saya hanya ada di dalam function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}

cekScope();
console.log(pesanGlobal);

// Latihan 1 Function Kalkulator Lengkap 

function tambah(a, b) {
    const hasil = a + b;
    return hasil;
}

function kurang(a, b) {
    const hasil = a - b;
    return hasil;
}

function kali(a, b) {
    const hasil = a * b;
    return hasil;
}

function bagi(a, b) {
    if (b === 0) {
        console.log('Error: tidak bisa membagi dengan nol');
        return null;
    }
    const hasil = a / b;
    return hasil;
}

function kalkulator(a, operator, b) {
    if (operator === '+') {
        return tambah(a, b);
    } else if (operator === '-') {
        return kurang(a, b);
    } else if (operator === '*') {
        return kali(a, b);
    } else if (operator === '/') {
        return bagi(a, b);
    } else {
        console.log('Operator tidak dikenali');
        return null;
    }
}

console.log('=== HASIL KALKULATOR ===');

console.log('10 + 5 =', kalkulator(10, '+', 5));
console.log('10 - 5 =', kalkulator(10, '-', 5));
console.log('10 * 5 =', kalkulator(10, '*', 5));
console.log('10 / 5 =', kalkulator(10, '/', 5));
console.log('10 / 0 =', kalkulator(10, '/', 0));