// TUGAS 1: Analisis dan Refactor

function ukurWaktu(label, fn) {
    const mulai = Date.now();
    const hasil = fn();
    const selesai = Date.now();

    console.log(`${label}: ${selesai - mulai} ms`);
    return hasil;
}

// FUNGSI A: INTERSECTION DUA ARRAY
function intersectionLambat(arr1, arr2) {
    const hasil = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !hasil.includes(arr1[i])) {
                hasil.push(arr1[i]);
            }
        }
    }

    return hasil;
}
function intersectionCepat(arr1, arr2) {
    const setArr2 = new Set(arr2);
    const hasil = [];

    for (const item of arr1) {
        if (setArr2.has(item) && !hasil.includes(item)) {
            hasil.push(item);
        }
    }

    return hasil;
}

// FUNGSI B: GROUP ANAGRAM
function groupAnagram(words) {
    const groups = {};

    for (const kata of words) {
        const key = kata.split('').sort().join('');

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(kata);
    }

    return Object.values(groups);
}

// FUNGSI C: ADAKAH a + b = c²
function cekKuadratLambat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (i !== j && j !== k && i !== k) {
                    if (arr[i] + arr[j] === arr[k] * arr[k]) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}

function cekKuadratCepat(arr) {
    const kuadratSet = new Set();

    for (const angka of arr) {
        kuadratSet.add(angka * angka);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (kuadratSet.has(arr[i] + arr[j])) {
                return true;
            }
        }
    }

    return false;
}

// DEMO FUNGSI A
console.log("=== Fungsi A: Intersection ===");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log("Lambat:", intersectionLambat(arr1, arr2));
console.log("Cepat :", intersectionCepat(arr1, arr2));

// DEMO FUNGSI B
console.log("\n=== Fungsi B: Group Anagram ===");

const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagram(words));

// DEMO FUNGSI C
console.log("\n=== Fungsi C: a + b = c² ===");

const angka = [2, 7, 3, 4];

console.log("Lambat:", cekKuadratLambat(angka));
console.log("Cepat :", cekKuadratCepat(angka));

// BENCHMARK DATA BESAR
console.log("\n=== Benchmark Data Besar ===");

const data1 = Array.from({ length: 3000 }, (_, i) => i);
const data2 = Array.from({ length: 3000 }, (_, i) => i + 1500);

ukurWaktu("Intersection Lambat O(n²)", () =>
    intersectionLambat(data1, data2)
);

ukurWaktu("Intersection Cepat O(n)", () =>
    intersectionCepat(data1, data2)
);

// Benchmark Fungsi C
const dataKuadrat = Array.from(
    { length: 300 },
    () => Math.floor(Math.random() * 100)
);

ukurWaktu("Kuadrat Lambat O(n³)", () =>
    cekKuadratLambat(dataKuadrat)
);

ukurWaktu("Kuadrat Cepat O(n²)", () =>
    cekKuadratCepat(dataKuadrat)
);