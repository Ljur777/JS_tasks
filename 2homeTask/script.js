//ДЗ 2
//    Задача1. Написать функцию, которая аргументами получается два числа и возвращает большее из них.
/*
function MaxNum(a,b) {
if(a>b) return console.log(a)
    else return console.log(b)
}
let a = +prompt("Введите 1 chislo"); 
let b = +prompt("Введите 2 chislo"); 
MaxNum(a,b)
 
 */
 
//   Задача2. Написать функцию, которая принимает аргументом число(больше 0)
//    и возвращает массив чисел от 0 до этого числа
let a = +prompt("Введите chislo > 0"); 
let arr = []
let k = 0
function newArray(a) {
  for (let i = 0; i < a; i) {
    a = a - 1; 
    arr.push(k);
    k = k + 1;
  }
    
}
newArray(a)
console.log(arr);