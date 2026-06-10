// tugas-1.js
// Simulasi Sistem Antrian Rumah Sakit

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const node = new Node(data);

        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const data = this.head.data;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        this.size--;
        return data;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let current = this.head;
        let hasil = [];

        while (current) {
            hasil.push(current.data.nama);
            current = current.next;
        }

        return hasil.length ? hasil.join(" -> ") : "(kosong)";
    }
}

class Pasien {
    constructor(id, nama, prioritas, waktuDaftar) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas; 
        this.waktuDaftar = waktuDaftar;
    }
}

class AntrianRS {
    constructor() {
        this.antrianDarurat = new Queue();
        this.antrianBiasa = new Queue();
    }

    daftar(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.enqueue(pasien);
        } else {
            this.antrianBiasa.enqueue(pasien);
        }

        console.log(
            `${pasien.nama} berhasil didaftarkan (${pasien.prioritas})`
        );
    }

    layani() {
        let pasien = null;

        if (!this.antrianDarurat.isEmpty()) {
            pasien = this.antrianDarurat.dequeue();
        } else if (!this.antrianBiasa.isEmpty()) {
            pasien = this.antrianBiasa.dequeue();
        }

        if (pasien) {
            console.log(
                `Melayani: ${pasien.nama} | ID: ${pasien.id} | Prioritas: ${pasien.prioritas}`
            );
        } else {
            console.log("Tidak ada pasien dalam antrian.");
        }
    }

    tampilkanAntrian() {
        console.log("\n=== STATUS ANTRIAN ===");
        console.log(
            "Darurat :",
            this.antrianDarurat.print()
        );
        console.log(
            "Biasa   :",
            this.antrianBiasa.print()
        );
        console.log("======================\n");
    }
}

const rs = new AntrianRS();

const namaPasien = [
    "Andi",
    "Budi",
    "Citra",
    "Dewi",
    "Eko",
    "Fajar",
    "Gina",
    "Hendra",
    "Indah",
    "Joko"
];

for (let i = 0; i < 10; i++) {
    const prioritas =
        Math.random() < 0.3 ? "darurat" : "biasa";

    const pasien = new Pasien(
        i + 1,
        namaPasien[i],
        prioritas,
        new Date().toLocaleTimeString()
    );

    rs.daftar(pasien);
}

rs.tampilkanAntrian();

console.log("=== PROSES PELAYANAN ===");

while (
    !rs.antrianDarurat.isEmpty() ||
    !rs.antrianBiasa.isEmpty()
) {
    rs.layani();
}

console.log("\nSemua pasien telah dilayani.");