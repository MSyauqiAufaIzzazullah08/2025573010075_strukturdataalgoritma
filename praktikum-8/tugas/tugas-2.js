// tugas-2.js
// Tugas Hash Table

// SOAL 1

function subArrayJumlahK(arr, k) {

    const map = new Map();

    map.set(0, 1);

    let prefixSum = 0;
    let jumlah = 0;

    for (const angka of arr) {

        prefixSum += angka;

        if (map.has(prefixSum - k)) {
            jumlah += map.get(prefixSum - k);
        }

        map.set(
            prefixSum,
            (map.get(prefixSum) || 0) + 1
        );
    }

    return jumlah;
}

// SOAL 2

function karakterPertamaUnik(s) {

    const map = new Map();

    for (const huruf of s) {

        map.set(
            huruf,
            (map.get(huruf) || 0) + 1
        );
    }

    for (let i = 0; i < s.length; i++) {

        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

// SOAL 3

function topKFrequent(arr, k) {

    const map = new Map();

    for (const angka of arr) {

        map.set(
            angka,
            (map.get(angka) || 0) + 1
        );
    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(item => item[0]);
}


// TES

console.log("=== Soal 1 ===");

console.log(
    subArrayJumlahK([1,1,1], 2)
);

console.log("\n=== Soal 2 ===");

console.log(
    karakterPertamaUnik("leetcode")
);

console.log(
    karakterPertamaUnik("loveleetcode")
);

console.log("\n=== Soal 3 ===");

console.log(
    topKFrequent([1,1,1,2,2,3], 2)
);

console.log(
    topKFrequent([4,4,4,6,6,7,7,7,7], 2)
);
