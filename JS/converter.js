//html-element in variabelen steken
var inputCurrency = document.getElementById("inputCurrency");
var btnCurrency = document.getElementById("btnCurrency");
var uitvoerCurrency = document.getElementById("uitvoerCurrency");
var currencySelector = document.getElementById("currencySelector");

//event listener toevoegen aan een knoop klikken op de knop
btnCurrency.addEventListener("click", function() {
    //hoevoelheid uit input halen 
    let geld = parseInt(inputCurrency.value);
    //eenheid uit select halen 
    let currency = currencySelector.value;
    //resultaat berekenen met functie met parameters
    let resultaat =calculateCurrency(geld, currency); 
    //p-element aanmaken 
    let zin = document.createElement("p");
    //tekst aanmaken
    let tekst = "&euro;" + geld + " is " + resultaat;
    
    //p-element invullen met tekst 
    uitvoerCurrency.innerHTML = resultaat;
    //p-element als child toevoegen aan uitvoer
    uitvoerCurrency.appendChild(zin);
});

//funvtie toevoegen
function calculateCurrency (aantal, eenheid) {
    //variabele om resulataat in op te slaan
    let resultaat;
    //switch om te controleren 
    switch(eenheid){
        //cases bij bepaalde gekozen eenheid
        case "yen":
            //berekening van euro naar eenheid 
            resultaat = "&#165" + aantal * 117.222;
            //stoppen van de switch 
            break;
        case "dollar":
            resultaat = "&#165" + aantal * 1.0985;
            break;
    }  
            
    return resultaat;
}