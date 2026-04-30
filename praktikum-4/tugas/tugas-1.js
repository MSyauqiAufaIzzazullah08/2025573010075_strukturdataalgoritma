// TUGAS 1: Sistem Manajemen Toko Online

class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        return `ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok}`;
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= 0) {
            console.log('Jumlah tidak valid');
            return;
        }

        if (jumlah > this.stok) {
            console.log(`Stok ${this.nama} tidak mencukupi`);
            return;
        }

        this.stok -= jumlah;
        console.log(`${this.nama} terjual ${jumlah} unit`);
    }
}


class ProdukDigital extends Produk {
    constructor(id, nama, harga, stok, ukuranFile, formatFile) {
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        return `${super.info()} | Ukuran: ${this.ukuranFile}MB | Format: ${this.formatFile}`;
    }

    download() {
        console.log(`${this.nama} sedang didownload...`);
    }

    jual(jumlah) {
        console.log(`${this.nama} adalah produk digital (tidak mengurangi stok fisik)`);
    }
}


class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        return `${super.info()} | Berat: ${this.beratGram}g | Dimensi: ${this.dimensi}`;
    }

    hitungOngkir(tarifPerKg) {
        const beratKg = this.beratGram / 1000;
        return beratKg * tarifPerKg;
    }
}

const produk1 = new ProdukDigital(1, 'Ebook JavaScript', 50000, 999, 5, 'PDF');
const produk2 = new ProdukDigital(2, 'Template Website', 75000, 999, 10, 'ZIP');

const produk3 = new ProdukFisik(3, 'Mouse Gaming', 150000, 10, 200, '10x5x3 cm');
const produk4 = new ProdukFisik(4, 'Keyboard Mechanical', 500000, 5, 800, '40x15x5 cm');

const daftarProduk = [produk1, produk2, produk3, produk4];

console.log('\n=== DAFTAR PRODUK ===');
daftarProduk.forEach(p => console.log(p.info()));

const produkTersedia = daftarProduk.filter(p => p.tersedia());

console.log('\n=== PRODUK TERSEDIA ===');
produkTersedia.forEach(p => console.log(p.nama));

const namaProduk = daftarProduk.map(p => p.nama);

console.log('\n=== NAMA PRODUK ===');
console.log(namaProduk);

console.log('\n=== SIMULASI ===');
produk3.jual(2);
console.log('Ongkir Mouse:', produk3.hitungOngkir(10000));

produk1.download();