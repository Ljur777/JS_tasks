//ДЗ 3


/*

Project10. Buttons. При нажатии на кнопку менять цвет body.
У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
Менять фона body на считанный атрибут id.
Добавить кнопку blue и orange. 


Создать 5 тегов 

 в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
для каждого тега p добавить соотв-ю текст. innerText


Есть массив arr = [
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
]
В html создаем 3 тега a -  x3. Для каждого из трех, 
    добавить link в href и title внутрь тега из массива arr


Создать две кнопки - PLUS, MINUS
Создать тег p с начальным значением - 0. 
При клике на buttonPlus увеличивать значение в теге p на 1
При клике на buttonMinus уменьшать значение в теге p на 1
addEventListener. innerText.
*/



let inputA = document.querySelector('.inputA');
let inputB = document.querySelector('.inputB');
let resultBtn = document.querySelector('.resultBtn');

resultBtn.addEventListener('click',
function(event){
    AorB(
        Number(inputA.value),
        Number(inputB.value),

    )
})
