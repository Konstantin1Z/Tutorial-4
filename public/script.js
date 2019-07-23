// var ourData;
id_mas=[];
window.onload = function()
{
//alert("Hello");
var j=document.getElementById("x");
j.click();
alert("Добро пожаловать на главную страницу");
j.click();
}


function add()
{
var j=document.getElementById("x");
var g=document.getElementById("y");

var request = new XMLHttpRequest();
request.open('GET','http://localhost:2403/worker');
request.onload = function() {
ourData = request.responseText;
ourData = JSON.parse(ourData);

j.innerHTML= ourData.length;
//g.innerHTML=ourData[2].Familia;
//console.log(j.textContent);
var len=ourData.length;
//renderHTML(ourData[ourData.length-1]);
};
request.send();

//alert(g.textContent);

if (parseInt(j.textContent) != 0) 
{

j.style.color="green";

var stroka0 = document.createElement('tr');
var stolbb0 = document.createElement('td');
stolbb0.innerHTML="№";

var stolbb1 = document.createElement('td');
stolbb1.innerHTML="Должность";
var stolbb2 = document.createElement('td');
stolbb2.innerHTML="Фамилия";
var stolbb3 = document.createElement('td');
stolbb3.innerHTML="Имя";
 var stolbb4 = document.createElement('td');
 stolbb4.innerHTML="Отчество";
 var stolbb5 = document.createElement('td');
 stolbb5.innerHTML="Пол";
 var stolbb6 = document.createElement('td');
 stolbb6.innerHTML="Возраст, лет";
 var stolbb7 = document.createElement('td');
 stolbb7.innerHTML="Наличие детей";
 var stolbb8 = document.createElement('td');
 stolbb8.innerHTML="Общий трудовой стаж, лет";
 var stolbb9 = document.createElement('td');
 stolbb9.innerHTML="Образование";
 var stolbb10 = document.createElement('td');
 stolbb10.innerHTML="Адрес";
var stolbb11 =document.createElement('td');
 stolbb11.innerHTML="Телефон";
 var stolbb12 =document.createElement('td');
 stolbb12.innerHTML="Е-маил";
 var stolbb13 =document.createElement('td');
 stolbb13.innerHTML="Наличие автомобиля";
 var stolbb14 = document.createElement('td');
 stolbb14.innerHTML="Примечание";

document.getElementById("t").appendChild(stroka0);

document.getElementById("t").appendChild(stolbb0);
document.getElementById("t").appendChild(stolbb1);
document.getElementById("t").appendChild(stolbb2);
document.getElementById("t").appendChild(stolbb3);
document.getElementById("t").appendChild(stolbb4);
document.getElementById("t").appendChild(stolbb5);
document.getElementById("t").appendChild(stolbb6);
document.getElementById("t").appendChild(stolbb7);
document.getElementById("t").appendChild(stolbb8);
document.getElementById("t").appendChild(stolbb9);
document.getElementById("t").appendChild(stolbb10);
document.getElementById("t").appendChild(stolbb11);
document.getElementById("t").appendChild(stolbb12);
document.getElementById("t").appendChild(stolbb13);
document.getElementById("t").appendChild(stolbb14);

for (var i = 0; i <=parseInt(j.textContent)-1; i++) 
{

var stroka = document.createElement('tr');
var stolb0 = document.createElement('td');
stolb0.innerHTML=i+1;
var stolb1 = document.createElement('td');
stolb1.innerHTML=ourData[i]["Dolg"];//
var stolb2 = document.createElement('td');
stolb2.innerHTML=ourData[i].Familia;//
var stolb3 = document.createElement('td');
stolb3.innerHTML=ourData[i]["Name"];//
 var stolb4 = document.createElement('td');
 stolb4.innerHTML=ourData[i]["Otchestvo"];//
 var stolb5 = document.createElement('td');
 stolb5.innerHTML=ourData[i]["sex"];//
 var stolb6 = document.createElement('td');
 stolb6.innerHTML=ourData[i]["Age"];//
 var stolb7 = document.createElement('td');
 stolb7.innerHTML=ourData[i]["Childrens"];//
 var stolb8 = document.createElement('td');
 stolb8.innerHTML=ourData[i]["Staj"];//
 var stolb9 = document.createElement('td');
 stolb9.innerHTML=ourData[i]["Education"];//
 var stolb10 =document.createElement('td');
 stolb10.innerHTML=ourData[i]["Adress"];//
 var stolb11 =document.createElement('td');
 stolb11.innerHTML=ourData[i]["Phone"];//
 var stolb12 = document.createElement('td');
 stolb12.innerHTML=ourData[i]["Mail"];//
var stolb13 = document.createElement('td');
 stolb13.innerHTML=ourData[i]["Auto"];//

 var stolb14 = document.createElement('td');
stolb14.innerHTML="<div class="+"redcl"+" id="+"red"+i+">Редактировать</div><div class="+"delcl"+" id="+"del"+i+">Удалить</div><div class="+"detcl"+" id="+"det"+i+">Подробнее</div>";

document.getElementById("t").appendChild(stroka);
document.getElementById("t").appendChild(stolb0);
document.getElementById("t").appendChild(stolb1);
document.getElementById("t").appendChild(stolb2);
document.getElementById("t").appendChild(stolb3);
document.getElementById("t").appendChild(stolb4);
document.getElementById("t").appendChild(stolb5);
document.getElementById("t").appendChild(stolb6);
document.getElementById("t").appendChild(stolb7);
document.getElementById("t").appendChild(stolb8);
document.getElementById("t").appendChild(stolb9);
document.getElementById("t").appendChild(stolb10);
document.getElementById("t").appendChild(stolb11);
document.getElementById("t").appendChild(stolb12);
document.getElementById("t").appendChild(stolb13);
document.getElementById("t").appendChild(stolb14);

id_mas[i]=ourData[i]["id"];

}

}

}


