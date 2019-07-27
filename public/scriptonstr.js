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




function upd()
{
//document.getElementById("x").style.display="none";
var mas=[];


$('#form').submit(function(event){
  
    if(this.checkValidity())
    {


//------- вычисляем количество лет--------------------------------------------
var a = new Date(document.getElementById("date").value);
var b = new Date();

    var age = b.getFullYear() - a.getFullYear();
    var m = b.getMonth() - a.getMonth();
    if (m < 0 || (m === 0 && b.getDate() < a.getDate())) 
    {
        age--;
    }
    //return age;

//------- Считываем буливые значения чекбоксов и переводим в нормальные слова---------
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

/////////////////////////////////////////////////////////////////////////////////////
//var spec;
//if (document.getElementById('xxx').options[document.getElementById('xxx').selectedIndex].text.length==0) {spec="-";}



// object

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
  age, 
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

var x=document.getElementById("x");
//x.innerHTML=mas[0].AdminLang;
//x.innerHTML=noviRabotnik.dolg;

$.ajax('/worker', {
  type: "POST",
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
    alert("Запись успешно добавдена");
  }, 
  error: function(xhr) {
    alert(xhr.responseText);
  }
});

}});


}

function sssave()
{
var y=document.getElementById("y");
y.click();
}