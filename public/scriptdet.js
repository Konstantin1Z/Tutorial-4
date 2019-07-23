window.onload=function()
{
alert("Подробная информация");  
var clik=document.getElementById('x');
clik.click();

}


var ourData;
var myid = JSON.parse(localStorage.getItem("id"));
var k=document.getElementById("dolg");
//k.innerHTML=myid;
var l;
//stolb7.innerHTML=ourData[i]["Childrens"];//

var request = new XMLHttpRequest();
request.open('GET','http://localhost:2403/worker');
request.onload = function() {
  ourData = request.responseText;
  ourData = JSON.parse(ourData);
  //console.log(ourData[0]);
  //alert(ourData[5]);
  //renderHTML(ourData[ourData.length-1]);
  l=ourData.length;
};
request.send();

function add()
{


for (var i = 0; i <= l; i++) //parseInt()
{
 
if(ourData[i]["id"]==myid)
{

document.getElementById("dolg").innerHTML=ourData[i]["Dolg"];	
/////////////////////////////////////////////////////////////////
if (ourData[i]["Dolg"]=="Рабочий" && ourData[i]["rabSpec"]  !="-") 
document.getElementById("dolg").innerHTML=ourData[i]["Dolg"]+". Примечание: Имеет специальность " + ourData[i]["rabSpec"];
if (ourData[i]["Dolg"]=="Рабочий" && ourData[i]["rabSpec"]  =="-") 
document.getElementById("dolg").innerHTML=ourData[i]["Dolg"];
/////////////////////////////////////////////////////////////////
if (ourData[i]["Dolg"]=="Охранник" && ourData[i]["Army"]  !="-") 
{
  if (ourData[i]["Army"]=="Да") 
document.getElementById("dolg").innerHTML=ourData[i]["Dolg"]+". Примечание: Служил в армии.";
else
document.getElementById("dolg").innerHTML=ourData[i]["Dolg"]+". Примечание: в армии не служил.";
}
if (ourData[i]["Dolg"]=="Охранник" && ourData[i]["Army"]  =="-") 
document.getElementById("dolg").innerHTML=ourData[i]["Dolg"] + ". Примечание: Служба в армии не указана.";
/////////////////////////////////////////////////////////////////
if (ourData[i]["Dolg"]=="Водитель" && ourData[i]["Kauto"]  !="-") 
document.getElementById("dolg").innerHTML=ourData[i]["Dolg"]+". Примечание: Имеет категорию вождения " + ourData[i]["Kauto"];
if (ourData[i]["Dolg"]=="Водитель" && ourData[i]["Kauto"]  =="-") 
document.getElementById("dolg").innerHTML=ourData[i]["Dolg"]+". Примечание: Категорию вождения не указана.";

/////////////////////////////////////////////////////////////////
if (ourData[i]["Dolg"]=="Системный администратор" && ourData[i]["AdminLang"]=="-") 
document.getElementById("dolg").innerHTML=ourData[i]["Dolg"]+". Примечание: Знание языков программирования не указано.";
if (ourData[i]["Dolg"]=="Системный администратор" && ourData[i]["AdminLang"]  !="-") 
document.getElementById("dolg").innerHTML=ourData[i]["Dolg"]+". Примечание: Знает язык программирования " + ourData[i]["AdminLang"];
/////////////////////////////////////////////////////////////////



document.getElementById("fam").innerHTML=ourData[i].Familia;
document.getElementById("im").innerHTML=ourData[i]["Name"];
document.getElementById("otch").innerHTML=ourData[i]["Otchestvo"];

if (ourData[i]["sex"]=="М")
document.getElementById("sex").innerHTML="Мужской";
if (ourData[i]["sex"]=="Ж")
document.getElementById("sex").innerHTML="Женский";

document.getElementById("age").innerHTML=ourData[i]["Age"] + " лет";


if (ourData[i]["Childrens"]=="Нет")
document.getElementById("child").innerHTML="Детей нет";
if (ourData[i]["Childrens"]=="Есть")
{
if (ourData[i]["KolDet"]=="")
document.getElementById("child").innerHTML="Дети есть, количество не указано";
if (ourData[i]["KolDet"]  !="")
document.getElementById("child").innerHTML="Дети есть, " + ourData[i]["KolDet"]; 
}  

document.getElementById("staj").innerHTML=ourData[i]["Staj"] + " лет";
document.getElementById("educat").innerHTML=ourData[i]["Education"];
document.getElementById("adress").innerHTML=ourData[i]["Adress"];
document.getElementById("tel").innerHTML=ourData[i]["Phone"];
document.getElementById("mail").innerHTML=ourData[i]["Mail"];

if (ourData[i]["Auto"]=="Нет")
document.getElementById("auto").innerHTML=ourData[i]["Auto"];
if (ourData[i]["Auto"]=="Есть")
{
if (ourData[i]["Wauto"]=="")
document.getElementById("auto").innerHTML=ourData[i]["Auto"] + ", но какое, не указан.";
if (ourData[i]["Wauto"]  !="")
document.getElementById("auto").innerHTML=ourData[i]["Auto"] + ", " + ourData[i]["Wauto"];
}

document.getElementById("zp").innerHTML=ourData[i]["Zp"] + " белорусских рублей";


}


}

}