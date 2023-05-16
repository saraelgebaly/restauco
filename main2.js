const dark = document.getElementById("dark");
const body = document.querySelector("body");
dark.onclick= function(){
    dark.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
}
function formValidate(){
       var Name = document.querySelector("#name").value;
     var Email = document.querySelector("#email").value;
     var Error = document.querySelector("#error") ;
     var Text = "";
     if (Name.length < 3){
         Text= "Please enter a valid Name!";
        Error.innerHTML= Text;
         return false;
     }
     else if(Email.indexOf ("@")== -1){
        Text= "Please enter valid Email!";
         Error.innerHTML= Text;
         return false;}

 else {
     return true;}
  }
 function sendMail(){
   var Params = {
    Name : document.getElementById("name").value ,
    Email : document.getElementById("email").value,
     message : document.getElementById("message").value
    };
   const serviceId= "service_yrjedwc";
    const templateId="template_oho217p";
    emailjs.send(serviceId,templateId,Params).then((res) =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log("res");
    alert("success!");
  })
  
 }
 
let map;

async function initMap() {
 
  const position = { lat: 30.1197986, lng: 31.537000300000045 };
 
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position:{lat:29.962696,lng:31.276942},
    title: "Uluru",
  });
}

initMap();
