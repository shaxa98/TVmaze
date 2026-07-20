// let arr = ["Abdulboqiy", "Salohiddin", "So'rob"];

// let bolalar = "Abdulboqiy, Salohiddin, So'rob, Avazdin";
// let bola1 = "Abdulboqiy";
// let bola2 = "Salohiddin";
// let bola3 = "So'rob";

// let mujiklar = ["Abdulboqiy", "Salohiddin", "So'rob", "Avazidin"];

// console.log(mujiklar[3]);

// var arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
// // Hamma sonlarni 2 ga kupaytir
// // sonlarKvadrati iborat yangi array oching
// // numberlar yig'indisi chiqar
// let kvadrat = [];
// for (let son = 0; son < arr.length; son++) {
//   kvadrat.push(arr[son] * 2);
//   console.log(kvadrat[son]);
// }

// let students = [
//   "Ali",
//   "Aziz",
//   "Madina",
//   "Bekzod",
//   "Dilshod",
//   "Avaz",
//   "Donyor",
//   "Samandar",
//   "Shahzod",
//   "Abdulboqi",
//   "Shaxzod",
//   "Salohiddin",
// ];
// // Studentlar ichidan Samandarni top
// // Student Samandarni index indexini aniqla

// for (let index = 0; index < students.length; index++) {
//   const student = students[index];
//   if (student == "Samandar") {
//     console.log("Student Samandar topildi " + index + " indexda");
//   }
// }

// const mevalar = ["Olma", "Anor", "Banan"];
// mevalar.sort();
// console.log(mevalar); // ['Anor', 'Banan', 'Olma']

// const bolalarIsmlari = [
//   "Sardor",
//   "Bekzod",
//   "Ibrohim",
//   "Laziz",
//   "Jasur",
//   "Asadbek",
//   "Xondamir",
//   "Kamron",
//   "Muhammad",
//   "Nodir",
//   "Gʻiyos",
//   "Temur",
//   "Diyorbek",
//   "Bilol",
//   "Umid",
//   "Farruh",
//   "Vali",
//   "Eldor",
//   "Humoyun",
//   "Abbos",
//   "Zafar",
//   "Olim",
//   "Firdavs",
//   "Hikmat",
//   "Doniyor",
//   "Qobil",
//   "Poʻlat",
//   "Rasul",
//   "Yahyoxon",
//   "Gʻofur",
// ];
// bolalarIsmlari.sort();
// // console.log(bolalarIsmlari);
// let ismlar = [];
// ismlar.push(bolalarIsmlari);
// console.log(ismlar);

// const sonlar = [8, 12345, 245, 42335, 5, 9, 60, 10, 23, 45];

// // O'sish tartibida:
// // sonlar.sort((a, b) => a - b);
// // console.log(sonlar);

// // Kamayish tartibida:
// sonlar.sort((a, b) => b - a);
// console.log(sonlar); // [10, 5, 2]

// const odamlar = [
//   { ism: "Ali", yosh: 25 },
//   { ism: "Vali", yosh: 20 },
//   { ism: "Avaz", yosh: 12 },
//   { ism: "Sorob", yosh: 13 },
//   { ism: "Abdulboqiy", yosh: 12 },
//   { ism: "Salohiddin", yosh: 13 },
//   { ism: "Javoxir", yosh: 15 },
// ];

// // Yoshi bo'yicha o'sish tartibida:
// odamlar.sort((a, b) => a.yosh - b.yosh);
// console.log(odamlar); // Kichigi birinchi chiqadi

// const harflar = ["R", "T", "Y", "D"];
// harflar.reverse();
// console.log(harflar);

// console.log(harflar); // ['D', 'C', 'B', 'A']

// const mevalar = ["A", "Q", "D", "W", "P", "B", "R"];

// Oldin saralanadi, keyin teskari qilinadi
// mevalar.sort().reverse();

// console.log(mevalar); // ['Olma', 'Banan', 'Anor']

// const original =;
// const teskari = original.reverse();

// console.log(original); // [3, 2, 1] <-- Asl massiv ham o'zgardi!
// console.log(teskari);  // [3, 2, 1]

// const original = ["Olma", "Banan", "Anor"];

// 1-usul: Spread operatori
// const nusxa1 = [...original].reverse();

// 2-usul: Zamonaviy .toReversed() metodi (Asl massivga tegmaydi)
// const nusxa2 = original.toReversed();

// console.log(original); // [1, 2, 3] <-- Asl massiv o'zgarmadi
// console.log(nusxa2); // [3, 2, 1]

// const mevalar = ["banan", "olma"];

// mevalar.unshift("anor");
// mevalar.unshift("Abdulboqi");
// mevalar.unshift("Salohiddin");

// console.log(mevalar);

// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8];
// const juftSonlar = sonlar.filter((son) => son % 2 === 0);

// console.log(juftSonlar);

// const sonlar1 = [1, 2, 3, 4];
// const ikkilanganSonlar = sonlar1.map((son) => son * 2);
// console.log(ikkilanganSonlar);
// console.log(sonlar1);

// const odamlar = [
//   { ism: "Ali", yosh: 17 },
//   { ism: "Vali", yosh: 20 },
//   { ism: "Hasan", yosh: 25 },
//   { ism: "Husan", yosh: 15 },
//   { ism: "Salohiddin", yosh: 13 },
//   { ism: "Abdulboqi", yosh: 12 },
//   { ism: "Javoxir", yosh: 15 },
// ];

// const kattalar = odamlar.filter((odam) => odam.yosh >= 18);
// const Kichiklar = odamlar.filter((odam) => odam.yosh <= 18);

// console.log(kattalar);
// console.log(Kichiklar);

const students = [
  { name: "Shahzod", baho: 88 },
  { name: "Salohiddin", baho: 98 },
  { name: "Abdulboqi1", baho: 85 },
  { name: "Hasan", baho: 80 },
  { name: "Husan", baho: 40 },
  { name: "Aziz", baho: 35 },
  { name: "Bekzod", baho: 70 },
  { name: "Jasur", baho: 35 },
  { name: "Sardor", baho: 68 },
  { name: "Diyor", baho: 74 },
];

const Birinchi = students.find((baho) => baho.baho <= 100);

console.log(Birinchi);
// const mevalar = ["olma", "anor", "banan", "uzum"];

// const natija = mevalar.filter((meva) => meva.includes("a"));

// console.log(natija);

// const ismlar = [
//   "Ali",
//   "Vali",
//   "Hasan",
//   "Husan",
//   "Aziz",
//   "Bekzod",
//   "Jasur",
//   "Sardor",
//   "Diyor",
//   "Shahzod",
//   "Akmal",
//   "Anvar",
//   "Jamshid",
//   "Sherzod",
//   "Ulug'bek",
//   "Bobur",
//   "Muhammad",
//   "Oybek",
//   "Sanjar",
//   "Dilshod",
//   "Rustam",
//   "Nodir",
//   "Abdulloh",
//   "Temur",
//   "Zafar",
//   "Komil",
//   "Baxtiyor",
//   "Islom",
//   "Farhod",
//   "Odil",
// ];

// const sonlar = [150, 10, 20, 30, 40, 200];

// const natija = sonlar.find((son) => son > 100);

// console.log(natija);
// const mevalar = ["olma", "anor", "behi"];

// const natija = mevalar.map((meva, index) => {
//   return `${index + 1}. ${meva}`;
// });

// console.log(natija);

// const sonlar = [1, 2, 3, 4, 5, 6];
// const juftSonlar = sonlar.filter((son) => son % 2 === 0);
// console.log(juftSonlar);
// console.log(sonlar);

// const mahsulotlar = [
//   { nom: "Telefon", narx: 800 },
//   { nom: "Chexol", narx: 15 },
//   { nom: "Naushnik", narx: 50 },
//   { nom: "Kabel", narx: 10 },
// ];
// const arzonMahsulotlar = mahsulotlar.filter((mahsulot) => mahsulot.narx < 20);

// console.log(arzonMahsulotlar);
