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

const mevalar = ["Olma", "Anor", "Banan"];
mevalar.sort();
console.log(mevalar); // ['Anor', 'Banan', 'Olma']

// const sonlar =;

// // O'sish tartibida:
// sonlar.sort((a, b) => a - b);
// console.log(sonlar); // [2, 5, 10]

// // Kamayish tartibida:
// sonlar.sort((a, b) => b - a);
// console.log(sonlar); // [10, 5, 2]

// const odamlar = [
//   { ism: 'Ali', yosh: 25 },
//   { ism: 'Vali', yosh: 20 }
// ];

// // Yoshi bo'yicha o'sish tartibida:
// odamlar.sort((a, b) => a.yosh - b.yosh);
// console.log(odamlar); // Kichigi birinchi chiqadi

// const harflar = ['A', 'B', 'C', 'D'];
// harflar.reverse();

// console.log(harflar); // ['D', 'C', 'B', 'A']

// const mevalar = ['Olma', 'Anor', 'Banan'];

// // Oldin saralanadi, keyin teskari qilinadi
// mevalar.sort().reverse();

// console.log(mevalar); // ['Olma', 'Banan', 'Anor']

// const original =;
// const teskari = original.reverse();

// console.log(original); // [3, 2, 1] <-- Asl massiv ham o'zgardi!
// console.log(teskari);  // [3, 2, 1]

// const original =;

// // 1-usul: Spread operatori
// const nusxa1 = [...original].reverse();

// // 2-usul: Zamonaviy .toReversed() metodi (Asl massivga tegmaydi)
// const nusxa2 = original.toReversed();

// console.log(original); // [1, 2, 3] <-- Asl massiv o'zgarmadi
// console.log(nusxa2);   // [3, 2, 1]
