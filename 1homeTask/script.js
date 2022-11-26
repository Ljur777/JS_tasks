// Задача 1. Вывести в консоли:


// в) Посчитать сумму цен всех ноутбуков. Итого.
/*

let laptops = [
    {
        mark : "Acer",
        price : 25000
    },
    {
        mark : "Apple",
        price : 37000
    },
    {
        mark : "Asus",
        price : 125500,
    },
    {
        mark : "HP",
        price : 42000
    },
    {
        mark : "Samsung",
        price : 52000
    }
]
// а) все ноутбуки. лучше с разметкой HTML
for(let i = 0; i < laptops.length; i++) {
    console.log(laptops[i])
 }
// б) все ноутбуки, цена которых больше 40000.
for(let i = 0; i < laptops.length; i++) {
    if(laptops[i].price > 40000) {
    console.log(laptops[i])
 }
}
//c
let sum = 0;
for(let i = 0; i < laptops.length; i++) {
    sum += laptops[i].price
    
 }
 console.log(`vsego`, sum)

 -----------------------------------




// Задача.2

let laptops = [
    {
        mark : "Acer",
        category : ["laptop", "tech"],
        price : 25000
    },
    {
        mark : "Apple",
        category : ["notebook", "tech"],
        price : 37000
    },
    {
        mark : "Asus",
        category : ["computer", "premium"],
        price : 125500,
    },
    {
        mark : "HP",
        category : ["computer", "tech"],
        price : 42000
    },
    {
        mark : "Samsung",
        category : ["notebook", "premium"],
        price : 52000
    }
]


/* а) Вывести все ноутбуки, у которых есть категория "laptop"
for(let i = 0; i < laptops.length; i++) {
  for(let j = 0; j < laptops[i].category.length; j++) {
    if(laptops[i].category[j] == "laptop") {
    console.log(laptops[i])
 }
}
}

б) Вывести все ноутбуки, у которых категория "premium"
for(let i = 0; i < laptops.length; i++) {
    for(let j = 0; j < laptops[i].category.length; j++) {
      if(laptops[i].category[j] == "premium") {
      console.log(laptops[i])
   }
  }
  }
 в) Вывести все ноутбуки, у которых категория "tech"
for(let i = 0; i < laptops.length; i++) {
    for(let j = 0; j < laptops[i].category.length; j++) {
      if(laptops[i].category[j] == "tech") {
      console.log(laptops[i])
   }
  }
  }
*/

// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.
/*
let laptops = [];//пустой массив создаем для заполнения

 for(let i = 0; i < 3; i++){ //циклом задаем 3 итерации(итерация=повторение)
    let mark = prompt("Введите марку ноутбука") //вводим строку
    let price = +prompt("Введите цену ноутбука") //вводим числовое значение через +
    laptops.push({ mark, price }) //пушим=вводим обьекты в массив
 }
 console.log(laptops);
*/
// Задача 4. 
// У пользователя с prompta запрашивать марку/цену. // По его ответу в консоли ввыводить ноутбуки с разметкой.
// Какую марку вы бы хотели? -Acer. Выводим хар-ки Acer
// На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене


let laptops = [
    {
        mark : "Acer",
        category : ["laptop", "tech"],
        price : 25000
    },
    {
        mark : "Apple",
        category : ["notebook", "tech"],
        price : 37000
    },
    {
        mark : "Asus",
        category : ["computer", "premium"],
        price : 125500,
    },
    {
        mark : "HP",
        category : ["computer", "tech"],
        price : 42000
    },
    {
        mark : "Samsung",
        category : ["notebook", "premium"],
        price : 52000
    }
]
let mark = prompt("Введите марку ноутбука") //вводим строку
let price = +prompt("Введите цену ноутбука") //вводим числовое значение через +
let sum = +prompt("На какую цену вы рассчитываете?") 

for(let i = 0; i < laptops.length; i++) {
    if(laptops[i].mark == mark) {
      console.log(laptops[i])
      
    }
    if(laptops[i].price === price) {
        console.log(laptops[i])
      }  else  console.log('Эта позиция на данный момент не доступна')
   /* if(laptops[i].price <= sum) {
        console.log(laptops[i])
      }*/
}

