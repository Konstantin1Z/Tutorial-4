 var ourData;
id_mas=[];
window.onload = function()
{
//alert("Hello");
var j=document.getElementById("x");
j.click();
// alert("Добро пожаловать на главную страницу");
// j.click();
}


function add()
{
var j=document.getElementById("x");
var g=document.getElementById("y");

var request = new XMLHttpRequest();
request.open('GET','http://localhost:2403/worker', false);
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

//if (parseInt(j.textContent) != 0) 
//{

//j.style.color="green";

var stroka0 = document.createElement('tr');
var stolbb0 = document.createElement('td');
stolbb0.innerHTML="<b>№</b>";

var stolbb1 = document.createElement('td');
stolbb1.innerHTML="<b>Должность</b>";
var stolbb2 = document.createElement('td');
stolbb2.innerHTML="<b>Фамилия</b>";
var stolbb3 = document.createElement('td');
stolbb3.innerHTML="<b>Имя</b>";
 var stolbb4 = document.createElement('td');
 stolbb4.innerHTML="<b>Отчество</b>";
 var stolbb5 = document.createElement('td');
 stolbb5.innerHTML="<b>Пол</b>";
 var stolbb6 = document.createElement('td');
 stolbb6.innerHTML="<b>Возраст, лет</b>";
 var stolbb7 = document.createElement('td');
 stolbb7.innerHTML="<b>Наличие детей</b>";
 var stolbb8 = document.createElement('td');
 stolbb8.innerHTML="<b>Общий трудовой стаж, лет</b>";
 var stolbb9 = document.createElement('td');
 stolbb9.innerHTML="<b>Образование</b>";
 var stolbb10 = document.createElement('td');
 stolbb10.innerHTML="<b>Адрес</b>";
var stolbb11 =document.createElement('td');
 stolbb11.innerHTML="<b>Телефон</b>";
 var stolbb12 =document.createElement('td');
 stolbb12.innerHTML="<b>Е-маил</b>";
 var stolbb13 =document.createElement('td');
 stolbb13.innerHTML="<b>Наличие автомобиля</b>";
 var stolbb14 = document.createElement('td');
 stolbb14.innerHTML="<b>Примечание</b>";

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

//}

}















document.getElementById("t").addEventListener('click', function(e){ 
var id = e.target.id; // Получили ID, т.к. в e.target содержится элемент по которому кликнули
var ida = id.substring(0, 3); 

console.log(ida);
if (ida=="del") // Удалить
{

var str = id.substring(3, id.length);

$.ajax({
  type : "POST",
  url  : "http://localhost:2403/worker/" + id_mas[str] + "?_method=DELETE",
  success: function(todo) {
    alert("Запись успешно удалена");
    location.replace("index.html");
  }, 
  error: function(xhr) {}
});

}


if (ida=="red") // Редактировать
{
  var str = id.substring(3, id.length);
localStorage.setItem('idRec', str);
localStorage.setItem('id',JSON.stringify(id_mas[str]));
location.replace("redact.html");

}

if (ida=="det") // Подробнее
{
var str = id.substring(3, id.length);
localStorage.setItem('idRec', str);
localStorage.setItem('id',JSON.stringify(id_mas[str]));
location.replace("details.html");
}

});
