// TUGAS 1: SISTEM NILAI MAHASISWA

const dataMahasiswa = [
    { nama: 'Syauqi', nilai: 85 },
    { nama: 'Firman', nilai: 92 },
    { nama: 'Danish', nilai: 58 },
    { nama: 'Rajul', nilai: 76 },
    { nama: 'Alfarabi', nilai: 64 },
    { nama: 'Syahidan', nilai: 45 }
];

function hitungStatistik(arrMahasiswa) {
    const totalMahasiswa = arrMahasiswa.length;

    const hasil = arrMahasiswa.reduce((acc, mhs) => {
        acc.totalNilai += mhs.nilai;
        if (mhs.nilai > acc.tertinggi) acc.tertinggi = mhs.nilai;
        if (mhs.nilai < acc.terendah) acc.terendah = mhs.nilai;

        return acc;
    }, {
        totalNilai: 0,
        tertinggi: -Infinity,
        terendah: Infinity
    });

    return {
        total: totalMahasiswa,
        rataRata: hasil.totalNilai / totalMahasiswa,
        tertinggi: hasil.tertinggi,
        terendah: hasil.terendah
    };
}

function filterLulus(arrMahasiswa, batasLulus) {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
    return arrMahasiswa.map(mhs => {
        let grade;

        if (mhs.nilai >= 90) grade = 'A';
        else if (mhs.nilai >= 80) grade = 'B';
        else if (mhs.nilai >= 70) grade = 'C';
        else if (mhs.nilai >= 60) grade = 'D';
        else grade = 'E';

        return { ...mhs, grade };
    });
}

console.log('=== DATA MAHASISWA ===');
dataMahasiswa.forEach((mhs, i) => {
    console.log(`${i + 1}. ${mhs.nama} - ${mhs.nilai}`);
});

const statistik = hitungStatistik(dataMahasiswa);

console.log('\n=== STATISTIK ===');
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata       : ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

const lulus = filterLulus(dataMahasiswa, 60);

console.log('\n=== MAHASISWA LULUS (>= 60) ===');
lulus.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai}`);
});

const denganGrade = tambahGrade(dataMahasiswa);

console.log('\n=== DATA DENGAN GRADE ===');
denganGrade.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai} (Grade: ${mhs.grade})`);
});
