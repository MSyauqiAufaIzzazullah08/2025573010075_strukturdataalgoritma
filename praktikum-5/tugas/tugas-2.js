// TUGAS 2: Visualisasi Pertumbuhan Big O

function ukurWaktu(fn, n) {
    const mulai = Date.now();
    fn(n);
    return Date.now() - mulai;
}

function fn_O1(n) {
    return n + 1;
}

function fn_On(n) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        total += i;
    }

    return total;
}

function fn_OnLogn(n) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            total += j;
        }
    }

    return total;
}

function fn_On2(n) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            total += i + j;
        }
    }

    return total;
}

function benchmarkSemua(ukuranData) {
    console.log("=== Visualisasi Pertumbuhan Big O ===");

    for (const n of ukuranData) {
        console.log(`\nUkuran Data: ${n}`);

        console.log("O(1)     :", ukurWaktu(fn_O1, n), "ms");
        console.log("O(n)     :", ukurWaktu(fn_On, n), "ms");
        console.log("O(n log n):", ukurWaktu(fn_OnLogn, n), "ms");
        console.log("O(n²)    :", ukurWaktu(fn_On2, n), "ms");
    }
}

benchmarkSemua([100, 500, 1000, 5000, 10000]);