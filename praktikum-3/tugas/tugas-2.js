// TUGAS 2: PANGKAT DAN PALINDROM REKURSIF

function pangkat(basis, eksponen) {

    if (eksponen === 0) return 1;

    return basis * pangkat(basis, eksponen - 1);
}

function balikString(str) {

    if (str.length <= 1) return str;

    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

function cekPalindrom(str) {
    const hasilBalik = balikString(str);
    return str === hasilBalik;
}

console.log('=== PANGKAT REKURSIF ===');
console.log('2^3 =', pangkat(2, 3));
console.log('5^2 =', pangkat(5, 2));
console.log('7^0 =', pangkat(7, 0));
console.log('3^4 =', pangkat(3, 4));

console.log('\n=== BALIK STRING ===');
console.log('halo ->', balikString('halo'));
console.log('dunia ->', balikString('dunia'));
console.log('javascript ->', balikString('javascript'));

console.log('\n=== CEK PALINDROM ===');
const kata = ['katak', 'civic', 'level', 'halo'];

kata.forEach(k => {
    if (cekPalindrom(k)) {
        console.log(`${k} adalah palindrom`);
    } else {
        console.log(`${k} bukan palindrom`);
    }
});
