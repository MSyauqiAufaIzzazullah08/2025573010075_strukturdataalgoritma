function jumlahArray(arr) { 
    let total = 0;             
    for (const x of arr) total += x; 
    return total; 
} 

function duplikasiArray(arr) { 
    const baru = [];            
    for (const x of arr) baru.push(x * 2); 
    return baru; 
} 

function faktorialRekursif(n) { 
    if (n <= 1) return 1; 
    return n * faktorialRekursif(n - 1); 
}

function faktorialIteratif(n) { 
    let hasil = 1; 
    for (let i = 2; i <= n; i++) hasil *= i; 
    return hasil; 
} 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  
console.log('Jumlah array   :', jumlahArray(arr));           
console.log('Duplikasi array:', duplikasiArray(arr));        
console.log('Faktorial 10 rekursif :', faktorialRekursif(10)); 
console.log('Faktorial 10 iteratif :', faktorialIteratif(10)); 

function hitungUnik(arr) { 
    const seen = new Set(); 
    for (const x of arr) seen.add(x); 
    return seen.size; 
} 
  
const dataAcak = [1,2,3,2,1,4,5,3,6,4,7]; 
console.log('Elemen unik:', hitungUnik(dataAcak)); 




// Latihan 2: ClassBankAccount

function cariPasanganLambat(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

function cariPasanganCepat(arr, target) {
    const seen = new Set();
    for (const x of arr) {
        const pasangan = target - x;
        if (seen.has(pasangan)) {
            return [pasangan, x];
        }

        seen.add(x);
    }

    return null;
}

const dataUji = [2, 7, 11, 15];
const target = 9;

console.log("=== Uji Fungsi ===");
console.log("Lambat:", cariPasanganLambat(dataUji, target));
console.log("Cepat :", cariPasanganCepat(dataUji, target));

function ukurWaktu(label, fn) {
    const mulai = Date.now();
    fn();
    const selesai = Date.now();
    console.log(`${label}: ${selesai - mulai} ms`);
}

const dataBesar = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 100000));
const targetBesar = -1;

ukurWaktu("Lambat O(n²)", () => cariPasanganLambat(dataBesar, targetBesar));
ukurWaktu("Cepat  O(n) ", () => cariPasanganCepat(dataBesar, targetBesar));