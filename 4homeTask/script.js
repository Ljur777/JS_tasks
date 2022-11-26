/* 1. Project10. Buttons. При нажатии на кнопку менять цвет body.
У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
Менять фона body на считанный атрибут id.
Добавить кнопку blue и orange.  




/*2 Создать 5 тегов в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
для каждого тега p добавить соотв-ю текст. innerText


let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]; // 

let paragraphs = document.querySelectorAll("p"); //собираем в массив все параграфа в [i]
texts.forEach((iterText, i) => { //function слово засеняем =>
   // console.log(iterText, i);
    let iterParagraph = paragraphs[i]; //присвоили переменной текущий параграф
    iterParagraph.innerText = iterText; //к текущему параграфу изменили текстовое свойство на текущую строку из массива
}
)
    
    
*/
/*2й способ/
 let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]; // 

let paragraphs = document.querySelectorAll("p"); //собираем в массив все параграфа в [i]
for (let i = 0; i < text.length; i++) {
 let iterParagraph = paragraphs[i]; //присвоили переменной текущий параграф
    let iterText = text[i];//каждый i елемент массива
    iterParagraph.innerText = iterText; //к текущему параграфу изменили текстовое свойство на текущую строку из массива
}
/*
3. В html создаем 3 тега a -  x3. Для каждого из трех, 
    добавить link в href и title внутрь тега из массива arr

    Есть массивт 
let arr = [
    {
        link : "https://google.com",
        title : "Ссылка на гугл"
    },
    {
        link : "https://instagram.com",
        title : "Ссылка на инстаграм"
    },
    {
        link : "https://facebook.com",
        title : "Ссылка на фейсбук"
    }
];

let links = querySelectorAll("a")
arr.forEach((Element, i) => { //перебираю массив елементов
    links[i].setAttribute("href",Element.link) //обращаюсь к конкретному тегу а и меняю атрибут(пустоту) на значение из обьекта по ключу линк 
    links[i].innerText = Element.title//обращаюсь к конкретному тегу а и меняю значение(пустую строку) на значение из текущего обьекта

})
*/
/*Создать две кнопки - PLUS, MINUS
Создать тег p с начальным значением - 0. 
При клике на buttonPlus увеличивать значение в теге p на 1
При клике на buttonMinus уменьшать значение в теге p на 1
addEventListener. innerText. 
*/
     
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let paragraf = document.querySelector(".paragraf")
   
minus.addEventListener("click", function() {
    paragraf.innerText = Number(paragraf.innerText) - 1;
})
plus.addEventListener("click", function() {
    paragraf.innerText = Number(paragraf.innerText) + 1;
})
