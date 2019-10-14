btnBallsport.addEventListener("click", function(){
    //de sport uit het element sportKeuze eruithalen
    let sport = sportKeuze.innerHTML;
    //variabele om bij te houden of we juist hebben gekozen 
    let juistGekozen = false;
    //doorlopen van heel de balsportArray 
    for (var i = 0; i < balsportArray.length; i++) {
        //elk element uit balsportArray controleren tov de sport die in sportKeuze staat 
        if(sport === balsportArray[i]) {
            //we hebben juist gekozen 
            juistGekozen = true;

        }
    }
    if(juistGekozen) {
         //pop-up om te laten weten dat we goed hebben gekozen
            alert("Goed zo")
    }
    else {
        alert("Probeer opnieuw!")
    }
    willekeurigeSportKiezen();

});

btnGeenBalsport.addEventListener("click", function(){
 //de sport uit het element sportKeuze eruithalen
    let sport = sportKeuze.innerHTML;
    //variabele om bij te houden of we juist hebben gekozen 
    let juistGekozen = false;
    //doorlopen van heel de balsportArray 
    for (var i = 0; i < geenBalsportArray.length; i++) {
        //elk element uit balsportArray controleren tov de sport die in sportKeuze staat 
        if(sport === geenBalsportArray[i]) {
            //we hebben juist gekozen 
            juistGekozen = true;

        }
    }
    if(juistGekozen) {
         //pop-up om te laten weten dat we goed hebben gekozen
            alert("Goed zo")
    }
    else {
        alert("Probeer opnieuw!")
    }
    willekeurigeSportKiezen();
});