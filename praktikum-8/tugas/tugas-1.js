// tugas-1.js
// Implementasi Hash Table dengan Open Addressing (Linear Probing)

class HashMapLinearProbing {
    constructor(kapasitas = 7) {
        this.kapasitas = kapasitas;
        this.ukuran = 0;
        this.tabel = new Array(kapasitas);
        this.TERHAPUS = { deleted: true };
    }

    _hash(key) {
        let hash = 0;
        const PRIME = 31;

        for (let i = 0; i < key.length; i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
        }

        return hash;
    }

    _resize() {
        const tabelLama = this.tabel;

        this.kapasitas *= 2;
        this.tabel = new Array(this.kapasitas);
        this.ukuran = 0;

        for (const item of tabelLama) {
            if (
                item !== undefined &&
                item !== this.TERHAPUS
            ) {
                this.set(item.key, item.value);
            }
        }
    }

    set(key, value) {

        if ((this.ukuran + 1) / this.kapasitas > 0.7) {
            this._resize();
        }

        let idx = this._hash(key);

        while (
            this.tabel[idx] !== undefined &&
            this.tabel[idx] !== this.TERHAPUS &&
            this.tabel[idx].key !== key
        ) {
            idx = (idx + 1) % this.kapasitas;
        }

        if (
            this.tabel[idx] === undefined ||
            this.tabel[idx] === this.TERHAPUS
        ) {
            this.ukuran++;
        }

        this.tabel[idx] = {
            key,
            value
        };
    }

    get(key) {

        let idx = this._hash(key);
        let awal = idx;

        while (this.tabel[idx] !== undefined) {

            if (
                this.tabel[idx] !== this.TERHAPUS &&
                this.tabel[idx].key === key
            ) {
                return this.tabel[idx].value;
            }

            idx = (idx + 1) % this.kapasitas;

            if (idx === awal) break;
        }

        return undefined;
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    delete(key) {

        let idx = this._hash(key);
        let awal = idx;

        while (this.tabel[idx] !== undefined) {

            if (
                this.tabel[idx] !== this.TERHAPUS &&
                this.tabel[idx].key === key
            ) {

                this.tabel[idx] = this.TERHAPUS;
                this.ukuran--;

                return true;
            }

            idx = (idx + 1) % this.kapasitas;

            if (idx === awal) break;
        }

        return false;
    }

    tampilkan() {
        console.log("\n=== Isi Hash Table ===");
        this.tabel.forEach((item, index) => {
            if (item === undefined) {
                console.log(index, "=> kosong");
            }

            else if (item === this.TERHAPUS) {
                console.log(index, "=> TERHAPUS");
            }

            else {
                console.log(
                    index,
                    "=>",
                    item.key,
                    ":",
                    item.value
                );
            }
        });
    }

    info() {

        console.log("\n=== Informasi ===");
        console.log("Kapasitas :", this.kapasitas);
        console.log("Ukuran    :", this.ukuran);

        console.log(
            "Load Factor :",
            (this.ukuran / this.kapasitas).toFixed(2)
        );
    }
}


// Tes

const map = new HashMapLinearProbing();

map.set("java", 1);
map.set("python", 2);
map.set("javascript", 3);
map.set("c++", 4);
map.set("golang", 5);

console.log("get(java) =", map.get("java"));
console.log("get(c++) =", map.get("c++"));

console.log("has(python) =", map.has("python"));

map.delete("python");

console.log("Setelah delete python:");
console.log("has(python) =", map.has("python"));

map.tampilkan();

map.info();