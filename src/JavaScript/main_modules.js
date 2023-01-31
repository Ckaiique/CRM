



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById('open').innerHTML = "CRM";
 
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById('open').innerHTML  =  '&#9776; CRM';
 
}


function Links(link){
  document.getElementById('title').innerHTML = link;

  var url = 'Route/'+link+'_modules.html';
  var xml = new XMLHttpRequest();
  
  xml.onreadystatechange = function(){
   
    if(xml.readyState == 4 && xml.status == 200){
      document.getElementById('element').innerHTML = xml.responseText;

    }
  }
  xml.open("GET",url,true);
  xml.send()
}