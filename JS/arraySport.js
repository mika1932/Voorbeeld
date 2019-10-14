var sportsArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "atletiek", "ballet", "dansen", "rugby", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];
var balsportArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "rugby"];
var geenBalsportArray = ["atletiek", "ballet", "dansen", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];

var sportKeuze = document.getElementById("sportKeuze");
var btnBalsport = document.getElementById("btnBalsport");
var btnGeenBalsport = document.getElementById("btnGeenBalsport");

//functie uitvoeren wanneer de pagina volledig is geladen
window.onload = function() {
    //een willekeurig getal kiezen tussen 0 en de lengte van de sportsArray(0-17)
    let random = Math.floor(Math.random() * sportsArray.length);
    //willekeurig element uit sportsArray in sportKeuze plaatsen
    sportKeuze.innerHTML = sportsArray[random];
}

btnBalsport.addEventListener("click", function() {
    
});

btnGeenBalsport.addEventListener("click", function() {
    
});