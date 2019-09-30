// element opvragen uit een html-pagina
var testDiv = document.getElementById("testDiv");

//aanpassen van wat er in een element staat 
testDiv.innerHTML = "dit is een stuk tekst.";

var knop = document.getElementById("knop")
var tekst1 = "school is leuk.";
var tekst2 = "school is niet leuk.";
var state = 0;
//Event listener toevoegen aan een element 
knop.addEventListener("click", function() {
    if(state === 0){
        testDiv.innerHTML = tekst2;
        state = 1;
    }
    else {
        testDiv.innerHTML = tekst1;
        state = 0;
    }
}); 




