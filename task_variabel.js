let angka1 = 24;
let angka2 = 12;
let angka3 = 11;
let angka4 = 6;
let angka5 = 4;

let penjumlahan = angka2 + angka4 + angka1;
let pengurangan = angka1 - angka4 - angka5;
let perkalian = angka4 * angka5 * angka3;
let pembagian = (angka1 + angka2) / angka4;
let sisaBagi= (angka1 + angka2) % angka4;

console.log('=====', ' Operator Aritmatika ', '=====')
console.log(`${angka2} + ${angka4} + ${angka1} \t= ${penjumlahan}`)
console.log(`${angka1} - ${angka4} - ${angka5} \t= ${pengurangan}`)
console.log(`${angka4} * ${angka5} * ${angka3} \t= ${perkalian}`)
console.log(`(${angka1} + ${angka2}) / ${angka4} \t= ${pembagian}`)
console.log(`(${angka1} + ${angka2}) % ${angka4} \t= ${sisaBagi} \n`)

console.log('=====', ' Operator Perbandingan ', '=====')
let lebihDari1 = angka1 > angka2;
let lebihDari2 = angka4 > angka3;

let kurangDari1 = angka1 < angka3;
let kurangDari2 = angka5 < angka4;

let lebihDariSamaDengan1 = angka1 >= angka1;
let lebihDariSamaDengan2 = angka2 >= angka5;

let kurangDariSamaDengan1 = angka5 <= angka5;
let kurangDariSamaDengan2 = angka2 <= angka1;

let samaDengan1 = angka1 == '12'; 
let samaDengan2 = angka5 == angka5;

let samaDenganSamaTipe1 = angka1 === '24';
let samaDenganSamaTipe2 = angka5 === angka5;

let tidakSamaDengan1 = angka4 != '6';
let tidakSamaDengan2 = angka2 != angka5;

let tidak_sama_dengan_tidak_sama_tipe1 = angka3 !== '11';
let tidak_sama_dengan_tidak_sama_tipe2 = angka3 !== angka3;

console.log(`${angka1} > ${angka2} \t= ${lebihDari1}`);
console.log(`${angka4} > ${angka3} \t\t= ${lebihDari2}`);
console.log(`${angka1} < ${angka3} \t= ${kurangDari1}`);
console.log(`${angka5} < ${angka4} \t\t= ${kurangDari2}`);
console.log(`${angka1} >= ${angka1} \t= ${lebihDariSamaDengan1}`)
console.log(`${angka2} >= ${angka5} \t= ${lebihDariSamaDengan2}`)
console.log(`${angka5} <= ${angka5} \t\t= ${kurangDariSamaDengan1}`)
console.log(`${angka2} <= ${angka1} \t= ${kurangDariSamaDengan2}`)
console.log(`${angka1} == '12' \t= ${samaDengan1}`)
console.log(`${angka5} == ${angka5} \t\t= ${samaDengan2}`)
console.log(`${angka1} === '24' \t= ${samaDenganSamaTipe1}`)
console.log(`${angka5} === ${angka5} \t= ${samaDenganSamaTipe2}`)
console.log(`${angka4} != '6' \t= ${tidakSamaDengan1}`)
console.log(`${angka2} != ${angka5} \t= ${tidakSamaDengan2}`)
console.log(`${angka3} !== '11' \t= ${tidak_sama_dengan_tidak_sama_tipe1}`)
console.log(`${angka3} !== ${angka3} \t= ${tidak_sama_dengan_tidak_sama_tipe2}`)
