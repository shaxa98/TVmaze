// let arr = ["Abdulboqiy", "Salohiddin", "So'rob"];

// let bolalar = "Abdulboqiy, Salohiddin, So'rob, Avazdin";
// let bola1 = "Abdulboqiy";
// let bola2 = "Salohiddin";
// let bola3 = "So'rob";

// let mujiklar = ["Abdulboqiy", "Salohiddin", "So'rob", "Avazidin"];

// console.log(mujiklar[3]);

var arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
// Hamma sonlarni 2 ga kupaytir
// sonlarKvadrati iborat yangi array oching
// numberlar yig'indisi chiqar
let kvadrat = [];
for (let son = 0; son < arr.length; son++) {
  kvadrat.push(arr[son] * 2);
  console.log(kvadrat[son]);
}

let students = [
  "Ali",
  "Aziz",
  "Madina",
  "Bekzod",
  "Dilshod",
  "Avaz",
  "Donyor",
  "Samandar",
  "Shahzod",
  "Abdulboqi",
  "Shaxzod",
  "Salohiddin",
];
// Studentlar ichidan Samandarni top
// Student Samandarni index indexini aniqla

for (let index = 0; index < students.length; index++) {
  const student = students[index];
  if (student == "Samandar") {
    console.log("Student Samandar topildi " + index + " indexda");
  }
}
