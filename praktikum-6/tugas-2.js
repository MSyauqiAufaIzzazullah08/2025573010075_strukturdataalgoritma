// tugas-2.js
// SOAL KLASIK LINKED LIST
// ==========================================

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function buatList(arr) {
  if (arr.length === 0) return null;

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

function cetakList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.next
      ? `[${current.data}] → `
      : `[${current.data}]`;

    current = current.next;
  }

  console.log(result);
}

function palindromLL(head) {
  const arr = [];
  let current = head;

  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  let kiri = 0;
  let kanan = arr.length - 1;

  while (kiri < kanan) {
    if (arr[kiri] !== arr[kanan]) {
      return false;
    }

    kiri++;
    kanan--;
  }

  return true;
}

function hapusNDariAkhir(head, n) {
  const dummy = new Node(0);
  dummy.next = head;

  let cepat = dummy;
  let lambat = dummy;

  for (let i = 0; i <= n; i++) {
    cepat = cepat.next;
  }

  while (cepat) {
    cepat = cepat.next;
    lambat = lambat.next;
  }

  lambat.next = lambat.next.next;

  return dummy.next;
}

function tengahLinkedList(head) {
  let lambat = head;
  let cepat = head;

  while (cepat && cepat.next) {
    lambat = lambat.next;
    cepat = cepat.next.next;
  }

  return lambat;
}

console.log("==================================");
console.log("1. TEST PALINDROM LINKED LIST");
console.log("==================================");

const P1 = buatList([1, 2, 3, 2, 1]);
cetakList(P1);
console.log("Palindrom?", palindromLL(P1));

const P2 = buatList([1, 2, 2, 1]);
cetakList(P2);
console.log("Palindrom?", palindromLL(P2));

const P3 = buatList([1, 2, 3, 4]);
cetakList(P3);
console.log("Palindrom?", palindromLL(P3));

console.log("\n==================================");
console.log("2. TEST HAPUS N DARI AKHIR");
console.log("==================================");

let H1 = buatList([1, 2, 3, 4, 5]);
console.log("List awal:");
cetakList(H1);

H1 = hapusNDariAkhir(H1, 2);

console.log("Setelah hapus node ke-2 dari akhir:");
cetakList(H1);

let H2 = buatList([10, 20, 30, 40]);
console.log("\nList awal:");
cetakList(H2);

H2 = hapusNDariAkhir(H2, 1);

console.log("Setelah hapus node terakhir:");
cetakList(H2);

let H3 = buatList([7, 8, 9]);
console.log("\nList awal:");
cetakList(H3);

H3 = hapusNDariAkhir(H3, 3);

console.log("Setelah hapus node pertama:");
cetakList(H3);

console.log("\n==================================");
console.log("3. TEST NODE TENGAH");
console.log("==================================");

const T1 = buatList([1, 2, 3, 4, 5]);
cetakList(T1);
console.log("Node tengah:", tengahLinkedList(T1).data);

const T2 = buatList([10, 20, 30, 40, 50, 60]);
cetakList(T2);
console.log("Node tengah:", tengahLinkedList(T2).data);

const T3 = buatList([100, 200, 300]);
cetakList(T3);
console.log("Node tengah:", tengahLinkedList(T3).data);