const mahasiswa = {
    nama    : 'Budi Santoso',
    umur    : 20,
    jurusan : 'Teknik Informatika',
    ipk     : 3.75,
    aktif   : true,
};

console.log('=== Akses Property ===');
console.log('Nama    :', mahasiswa.nama);
console.log('Jurusan :', mahasiswa['jurusan']);

const keyYangDicari  = 'ipk';
console.log('IPK     :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@email.com';
mahasiswa.umur  =  21;

console.log('\nSetelah diubah:', mahasiswa);

const dosen = {
    nama        : 'Dr. Ahmad Fauzi',
    matakuliah  : 'Struktur Data',
    pengalaman  :  10, 


perkenalan() {
    return `Halo. saya ${this.nama}, mengajar ${this.matakuliah}.`;
},

statusSenior() {
    if (this.pengalaman >= 10) {
        return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') {
        console.log(`  ${key}: ${dosen[key]}`);
    }
}

console.log('key  :', Object.keys(mahasiswa));
console.log('values :', Object.values(mahasiswa));

//Latihan 1 Object Buku Dan Perpustakaan

//Bikin Object Sama Method
const buku = {
    judul       : 'Bumi',
    pengarang   : 'Tere Liye',
    tahunTerbit : 2015,
    harga       : 20000,
    tersedia    : true,


    info() {
    return `judul: ${this.judul}, pengarang: ${this.pengarang}, tahun: ${this.tahunTerbit}, harga: Rp${this.harga}`;
    },

    diskon(persen) {
    return this.harga * (1 - persen / 100);
    }
};

console.log(buku.info());
console.log('Harga setelah diskon 10%:', buku.diskon(10));

//Array Untuk Koleksi Buku
const koleksiBuku = [
    buku,
    {
        judul: 'One Piece',
        pengarang: 'Eichiro Oda',
        tahunTerbit: 1987,
        harga: 30000,
        tersedia: true,

        info() {
            return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
        }
    },
    {
        judul: 'Gachiakuta',
        pengarang: 'Kei Urana',
        tahunTerbit: 2018,
        harga: 45000,
        tersedia: true,

        info() {
            return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
        }
    },
    {
        judul: 'Naruto',
        pengarang: 'Masashi Kishimoto',
        tahunTerbit: 1986,
        harga: 35000,
        tersedia: true,

        info() {
            return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
        }
    }
];


//ForEach Semua Buku ( Ditampilkan )
console.log('\n=== Semua Buku ===');
koleksiBuku.forEach(b => {
    console.log(b.info());
});

//Filter Buku Yang Masih Ada/Tersedia
const bukuTersedia = koleksiBuku.filter(b => b.tersedia === true);

console.log('\n=== Buku Tersedia ===');
bukuTersedia.forEach(b => {
    console.log(b.judul);
});