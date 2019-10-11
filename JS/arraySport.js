var sportsArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "atletiek", "ballet", "dansen", "ruggby", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];
var balsportArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "ruggby"];
var geenBalsportArray = ["atletiek", "ballet", "dansen", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];

var sportKeuze = document.getElementById("SportKeuze");
var btnBalsport = document.getElementById("btnBalsport")
var btnGeenBalsport = document.getElementById("btnGeenBalsport")

//functie uitvoeren totdat de pagina volledig is geladen
window.onload = function(){
    //een willekeurig kiezen getal tussen 0 en de lengte van de sportsArray (0-17) 
    let random = Math.floor(Math.random() * sportsArray.length);
    sportKeuze.innerHTML = sportsArray[random];   
}
btnBalsport.addEventListener("click",function(){
    
});
btnGeenBalsport.addEventListener("click",function (){
    
});