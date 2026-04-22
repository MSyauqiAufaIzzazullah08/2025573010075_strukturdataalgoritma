class Mahasiswa { 
    constructor(nama, nim, jurusan) { 
        this.nama    = nama;     
        this.nim     = nim; 
        this.jurusan = jurusan; 
        this.nilai   = [];        
    } 
  
    tambahNilai(nilai) { 
        this.nilai.push(nilai); 
    } 
  
    hitungRataRata() {

 if (this.nilai.length === 0) return 0; 
        const total = this.nilai.reduce((sum, n) => sum + n, 0); 
        return (total / this.nilai.length).toFixed(2); 
    } 
  
    getInfo() { 
        return `[${this.nim}] ${this.nama} - ${this.jurusan} | IPK: ${this.hitungRataRata()}`; 
    } 
}

const mhs1 = new Mahasiswa('Budi Santoso', '2021001', 'Informatika'); 
const mhs2 = new Mahasiswa('Siti Rahayu',  '2021002', 'Sistem Informasi'); 
const mhs3 = new Mahasiswa('Ahmad Fauzi',  '2021003', 'Informatika');

mhs1.tambahNilai(85); mhs1.tambahNilai(90); mhs1.tambahNilai(78); 
mhs2.tambahNilai(92); mhs2.tambahNilai(88); mhs2.tambahNilai(95); 
mhs3.tambahNilai(70); mhs3.tambahNilai(75); 

console.log('=== Data Mahasiswa ==='); 
console.log(mhs1.getInfo()); 
console.log(mhs2.getInfo()); 
console.log(mhs3.getInfo()); 

class Kalkulator { 
    static tambah(a, b)  { return a + b; } 
    static kurang(a, b)  { return a - b; } 
    static kali(a, b)    { return a * b; } 
    static bagi(a, b)    { 
        if (b === 0) return 'Error: bagi nol'; 
        return a / b; 
    } 
} 

console.log('\n=== Static Method ==='); 
console.log('10 + 5 =', Kalkulator.tambah(10, 5)); 
console.log('10 * 5 =', Kalkulator.kali(10, 5)); 
console.log('10 / 0 =', Kalkulator.bagi(10, 0)); 

class Lingkaran { 
    constructor(jariJari) { 
        this._jariJari = jariJari;    
    } 

 get jariJari() { return this._jariJari; } 
    get luas()     { return (Math.PI * this._jariJari ** 2).toFixed(2); } 
    get keliling() { return (2 * Math.PI * this._jariJari).toFixed(2); }

     set jariJari(nilai) { 
        if (nilai <= 0) throw new Error('Jari-jari harus positif!'); 
        this._jariJari = nilai; 
    } 
} 

console.log('\n=== Getter & Setter ==='); 
const l = new Lingkaran(7); 
console.log('Jari-jari:', l.jariJari);   
console.log('Luas     :', l.luas);        
console.log('Keliling :', l.keliling);      
l.jariJari = 10;                             
console.log('Setelah diubah - Luas:', l.luas); 


// Latihan 3 Class BankAccount

class BankAccount {
    constructor(namaPemilik, saldoAwal = 0) {
        this.namaPemilik = namaPemilik;
        this.saldo = saldoAwal;
    }

    // Method setor
    setor(jumlah) {
        if (jumlah <= 0) {
            console.log('Error: jumlah setor harus > 0');
            return;
        }
        this.saldo += jumlah;
        console.log(`${this.namaPemilik} setor Rp${jumlah}`);
    }

  
    tarik(jumlah) {
        if (jumlah <= 0) {
            console.log('Error: jumlah tarik harus > 0');
            return;
        }

        if (jumlah > this.saldo) {
            console.log('Saldo tidak mencukupi');
            return;
        }

        this.saldo -= jumlah;
        console.log(`${this.namaPemilik} tarik Rp${jumlah}`);
    }

  
    cekSaldo() {
        console.log(`Pemilik: ${this.namaPemilik} | Saldo: Rp${this.saldo}`);
    }

  
    static transfer(akun1, akun2, jumlah) {
        if (jumlah <= 0) {
            console.log('Error: jumlah transfer harus > 0');
            return;
        }

        if (akun1.saldo < jumlah) {
            console.log('Transfer gagal: saldo tidak cukup');
            return;
        }

        akun1.tarik(jumlah);
        akun2.setor(jumlah);

        console.log(`Transfer Rp${jumlah} dari ${akun1.namaPemilik} ke ${akun2.namaPemilik} berhasil`);
    }
}

const akun1 = new BankAccount('Bang En', 100000);
const akun2 = new BankAccount('Rafi', 50000);

console.log('\n=== CEK SALDO AWAL ===');
akun1.cekSaldo();
akun2.cekSaldo();

console.log('\n=== SETOR ===');
akun1.setor(50000);

console.log('\n=== TARIK ===');
akun1.tarik(30000);
akun1.tarik(200000); // gagal

console.log('\n=== TRANSFER ===');
BankAccount.transfer(akun1, akun2, 40000);

console.log('\n=== SALDO AKHIR ===');
akun1.cekSaldo();
akun2.cekSaldo();