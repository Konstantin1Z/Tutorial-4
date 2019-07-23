$('#dolg').change(function(){
if (document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="Водитель") 
{
$("#xxx").show();
$("#coment").text("Категория");

 $("#xxx1").hide();
document.getElementById('xxx1').value=""
$("#xxx2").hide();
document.getElementById('xxx2').value=""
$("#xxx3").hide();
document.getElementById('xxx3').value=""
}

else if(document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="Рабочий")
{
  $("#xxx1").show();
$("#coment").text("Специальность");

 $("#xxx").hide();
document.getElementById('xxx').value=""
$("#xxx2").hide();
document.getElementById('xxx2').value=""
$("#xxx3").hide();
document.getElementById('xxx3').value=""
}
      
else if(document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="Охранник")
{
$("#xxx2").show();
$("#coment").text("Служба в армии");

 $("#xxx").hide();
document.getElementById('xxx').value=""
$("#xxx1").hide();
document.getElementById('xxx1').value=""
$("#xxx3").hide();
document.getElementById('xxx3').value=""
}
else if(document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="Системный администратор")
{
$("#xxx3").show();
$("#coment").text("Знание ЯП");

 $("#xxx").hide();
document.getElementById('xxx').value=""
$("#xxx1").hide();
document.getElementById('xxx1').value=""
$("#xxx2").hide();
document.getElementById('xxx2').value=""


}
else
  {
        $("#xxx").hide();
        document.getElementById('xxx').value=""
        $("#xxx1").hide();
        document.getElementById('xxx1').value=""
        $("#xxx2").hide();
        document.getElementById('xxx2').value=""
        $("#xxx3").hide();
        document.getElementById('xxx3').value=""
        $("#coment").text("");
  }

});

/////////////////////////////////////////////////////
$('#child').change(function()
{
    if(this.checked!=true)
    {
          $("#KolDet").hide();
          $("#KolDet").val("");
    }
  else
  {
        $("#KolDet").show();
  }
});
/////////////////////////////////////////////////////
$('#auto').change(function()
{
    if(this.checked!=true)
    {
          $("#Wauto").hide();
          $("#Wauto").val("");
    }
  else
  {
        $("#Wauto").show();
  }
});

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
/////////////////////////////////////////////////////////////////

document.getElementById("dolg").options[document.getElementById('dolg').selectedIndex].text=ourData[i]["Dolg"];
//if (ourData[i]["Dolg"]=="Рабочий" || ourData[i]["Dolg"]=="Водитель" || ourData[i]["Dolg"]=="Охранник" || ourData[i]["Dolg"]=="Системный администратор")
if (document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="Водитель") 
{
document.getElementById('xxx').options[document.getElementById('xxx').selectedIndex].text==ourData[i]["Kauto"];		
$("#xxx").show();
$("#coment").text("Категория");

 $("#xxx1").hide();
//document.getElementById('xxx1').value=""
$("#xxx2").hide();
//document.getElementById('xxx2').value=""
$("#xxx3").hide();
//document.getElementById('xxx3').value=""
}

else if(document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="Рабочий")
{
document.getElementById('xxx1').options[document.getElementById('xxx1').selectedIndex].text==ourData[i]["rabSpec"];	
  $("#xxx1").show();
$("#coment").text("Специальность");

 $("#xxx").hide();
//document.getElementById('xxx').value=""
$("#xxx2").hide();
//document.getElementById('xxx2').value=""
$("#xxx3").hide();
//document.getElementById('xxx3').value=""
}
      
else if(document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="Охранник")
{
	document.getElementById('xxx2').options[document.getElementById('xxx2').selectedIndex].text==ourData[i]["Army"];	
$("#xxx2").show();
$("#coment").text("Служба в армии");

 $("#xxx").hide();
//document.getElementById('xxx').value=""
$("#xxx1").hide();
//document.getElementById('xxx1').value=""
$("#xxx3").hide();
//document.getElementById('xxx3').value=""
}
else if(document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="Системный администратор")
{
	document.getElementById('xxx3').options[document.getElementById('xxx3').selectedIndex].text==ourData[i]["AdminLang"];	
$("#xxx3").show();
$("#coment").text("Знание ЯП");

 $("#xxx").hide();
//document.getElementById('xxx').value=""
$("#xxx1").hide();
//document.getElementById('xxx1').value=""
$("#xxx2").hide();
//document.getElementById('xxx2').value=""


}
else
  {
        $("#xxx").hide();
        //document.getElementById('xxx').value=""
        $("#xxx1").hide();
        //document.getElementById('xxx1').value=""
        $("#xxx2").hide();
        //document.getElementById('xxx2').value=""
        $("#xxx3").hide();
        //document.getElementById('xxx3').value=""
        $("#coment").text("");
  }



document.getElementById("fam").value=ourData[i]["Familia"];
document.getElementById("im").value=ourData[i]["Name"];
document.getElementById("otch").value=ourData[i]["Otchestvo"];
document.getElementById("date").value=ourData[i]["Age"];//
if (ourData[i]["Childrens"]=="Есть") 
{
document.getElementById("child").checked = true;
document.getElementById("KolDet").style.display.inline;
document.getElementById("KolDet").value=ourData[i]["KolDet"];
}

else
{
document.getElementById("child").checked = false;
document.getElementById("KolDet").style.display.none;
}

document.getElementById("staj").value=ourData[i]["Staj"];
document.getElementById("educat").options[document.getElementById('educat').selectedIndex].text=ourData[i]["Education"];
document.getElementById("address").value=ourData[i]["Adress"];
document.getElementById("tel").value=ourData[i]["Phone"];
document.getElementById("mail").value=ourData[i]["Mail"];
if (ourData[i]["Auto"]=="Есть") 
{
document.getElementById("auto").checked = true;
document.getElementById("Wauto").style.display.inline;
document.getElementById("Wauto").value=ourData[i]["Wauto"];
}
else
{
document.getElementById("auto").checked = false;
document.getElementById("Wauto").style.display.none;
}
document.getElementById("zp").value=ourData[i]["Zp"];


}


}

}





function upd()
{
// var ggg= document.getElementById("y");
// ggg.style.width="500px";

var mas=[];

// $('#form').submit(function(event){
  
//     if(this.checkValidity())
//     {

// Дети
var c=document.getElementById("child").checked;
if(c==true)
c="Есть";
else
c="Нет";
// Авто
var d=document.getElementById("auto").checked;
if(d==true)
d="Есть";
else
d="Нет";

function rabotnik(dolg, family, name, otch, sex, age, child, staj, educat, address, phone, mail, auto, Kauto, Wauto, KolDet, Army, rabSpec, AdminLang, zp)
    {
      this.dolg = dolg;
      this.family = family;
      this.name = name;
      this.otch = otch;
      this.sex = sex;
    this.age=age;
    this.child=child;
    this.staj=staj;
    this.educat=educat;
    this.address = address;
    this.phone = phone;
    this.mail=mail;    
      this.auto=auto;

      this.Kauto=Kauto;
      this.Wauto=Wauto;
      this.KolDet=KolDet;
      this.Army=Army;
      this.rabSpec=rabSpec;
      this.AdminLang=AdminLang;
      this.zp=zp;

this.getDolg = function(){return this.dolg;}  
this.getFamily = function(){return this.family;}
this.getName = function(){return this.name;}
this.getOtch = function(){return this.otch;}
this.getsex = function(){return this.sex;}
this.getAge = function(){return this.age;}
this.getChild = function(){return this.child;}
this.getStaj = function(){return this.staj;}
this.getEducat = function(){return this.educat;}
this.getAddress = function(){return this.address;}
this.getPhone = function(){return this.phone;}
this.getMail = function(){return this.mail;}
this.getAuto = function(){return this.auto;}

      this.getKauto=function(){return this.Kauto;}
      this.getWauto=function(){return this.Wauto;}
      this.getKolDet=function(){return this.KolDet;}
      this.getArmy=function(){return this.Army;}
      this.getrabSpec=function(){return this.rabSpec;}
      this.getAdminLang=function(){return this.AdminLang;}
      this.getzp=function(){return this.zp;}

    }

var noviRabotnik = new rabotnik(
  document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text, 
  document.getElementById("fam").value, 
  document.getElementById("im").value, 
  document.getElementById("otch").value,
  document.getElementById('sex').options[document.getElementById('sex').selectedIndex].text,
  document.getElementById("date").value, 
  c, 
  document.getElementById("staj").value, 
  document.getElementById('educat').options[document.getElementById('educat').selectedIndex].text, 
  document.getElementById("address").value, 
  document.getElementById("tel").value,
  document.getElementById("mail").value, 
  d, 
  document.getElementById('xxx').options[document.getElementById('xxx').selectedIndex].text, 
  document.getElementById("Wauto").value,
  document.getElementById("KolDet").value, 
  document.getElementById('xxx2').options[document.getElementById('xxx2').selectedIndex].text, 
  document.getElementById('xxx1').options[document.getElementById('xxx1').selectedIndex].text, 
  document.getElementById('xxx3').options[document.getElementById('xxx3').selectedIndex].text,
  document.getElementById("zp").value);

mas.push(noviRabotnik);

$.ajax('/worker/' + myid, {
  type: "PUT",
  contentType: "application/json",
  data: JSON.stringify({
    username: noviRabotnik.name,
    password: noviRabotnik.name,
    Dolg: noviRabotnik.dolg,
Familia: noviRabotnik.family,
Name: noviRabotnik.name,
Otchestvo: noviRabotnik.otch,
sex: noviRabotnik.sex,
Age: noviRabotnik.age,
Childrens: noviRabotnik.child,
Staj: noviRabotnik.staj,
Education: noviRabotnik.educat,
Adress: noviRabotnik.address,
Phone: noviRabotnik.phone,
Mail: noviRabotnik.mail,
Auto: noviRabotnik.auto,
Kauto: noviRabotnik.Kauto,
KolDet: noviRabotnik.KolDet,
Army: noviRabotnik.Army,
rabSpec: noviRabotnik.rabSpec,
AdminLang: noviRabotnik.AdminLang,
Wauto: noviRabotnik.Wauto,
Zp: noviRabotnik.zp,

  }),
  success: function(workerxxx) {
    // Do something
  }, 
  error: function(xhr) {
    alert(xhr.responseText);
  }
});

alert("Запись успешно обнавлена");

location.replace("index.html");

//}});

}