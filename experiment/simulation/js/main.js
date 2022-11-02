var mto=0.5;
var menu_score = 0;
var naoh = 25;
var sand = 50;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function dimensions()
{
	document.getElementById("simulation").innerHTML="<img src='images/dimensions.jpg' width='55%'>";
	document.getElementById("dimension").style.display = "none";
	document.getElementById("cylinder30mm").style.display = "block";
}

function cylinder30mm()
{
	document.getElementById("simulation").innerHTML="<img src='images/cylinder30mm.gif' width='80%'>";
	document.getElementById("cylinder30mm").style.display = "none";
	setTimeout(() => {
	document.getElementById("height20mm").style.display = "block";
	}, 5000);
}

function height20mm()
{
	document.getElementById("simulation").innerHTML="<img src='images/height20mm.gif' width='80%'>";
	document.getElementById("height20mm").style.display = "none";
	setTimeout(() => {
	document.getElementById("specimen1").style.display = "block";
	}, 2000);
}

function specimen1()
{
	document.getElementById("simulation").innerHTML="<img src='images/specimen1.gif' width='80%'>";
	document.getElementById("specimen1").style.display = "none";
	setTimeout(() => {
	document.getElementById("cylinder40mm").style.display = "block";
	}, 10000);
}

function cylinder40mm()
{
	document.getElementById("simulation").innerHTML="<img src='images/cylinder40mm.gif' width='80%'>";
	document.getElementById("cylinder40mm").style.display = "none";
	setTimeout(() => {
	document.getElementById("height30mm").style.display = "block";
	}, 3000);
}

function height30mm()
{
	document.getElementById("simulation").innerHTML="<img src='images/height30mm.gif' width='80%'>";
	document.getElementById("height30mm").style.display = "none";
	setTimeout(() => {
	document.getElementById("specimen2").style.display = "block";
	}, 3000);
}

function specimen2()
{
	document.getElementById("simulation").innerHTML="<img src='images/specimen2.gif' width='80%'>";
	document.getElementById("specimen2").style.display = "none";
	setTimeout(() => {
	document.getElementById("cylinder50mm").style.display = "block";
	}, 10500);
}

function cylinder50mm()
{
	document.getElementById("simulation").innerHTML="<img src='images/cylinder50mm.gif' width='80%'>";
	document.getElementById("cylinder50mm").style.display = "none";
	setTimeout(() => {
	document.getElementById("height10mm").style.display = "block";
	}, 4000);
}

function height10mm()
{
	document.getElementById("simulation").innerHTML="<img src='images/height10mm.gif' width='80%'>";
	document.getElementById("height10mm").style.display = "none";
	setTimeout(() => {
	document.getElementById("specimen3").style.display = "block";
	}, 3000);
}

function specimen3()
{
	document.getElementById("simulation").innerHTML="<img src='images/specimen3.gif' width='80%'>";
	document.getElementById("specimen3").style.display = "none";
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}