// Latihan 1: Identifikasi Kompleksitas

function f(n){
  return n * 2;
}

function fungsiB(n){
  let count = 0;
  for (let i=0; i<n; i++){
    for (let j=0; j<n; j++){
      count++;
    }
  }
  return count;
}

function fungsiC(n){
  let count = 0;
  for (let i=1; i<n; i*=2){
    count++;
  }
  return count;
}

function fungsiD(arr){
  let count = 0;
  arr.forEach(x => arr.forEach(y => count++));
  return count;
}

function hitungKompleksitas(input, fn){
  const mulai = Date.now();
  const hasil = fn(input);
  const selesai = Date.now();
  console.log("Waktu:", selesai - mulai, "ms | hasil:", hasil);
}

const n = 1000;
const data = Array.from({length: n}, (_, i) => i);

hitungKompleksitas(n, f);
hitungKompleksitas(n, fungsiB);
hitungKompleksitas(n, fungsiC);
hitungKompleksitas(data, fungsiD);