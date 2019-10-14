var invoerSchrikkeljaar = document.getElementById("invoerSchrikkeljaar");
var btnSchrikkeljaar = document.getElementById("btnSchrikkeljaar");
var uitvoerSchrikkeljaar = document.getElementById("uitvoerSchrikkeljaar");

btnSchrikkeljaar.addEventListener("click", function() {
    let jaartal = invoerSchrikkeljaar.value;
    let tekst = "Het jaar " + jaartal + " is ";
    if(jaartal % 4 !== 0) {
        //niet deelbaar door 4
        tekst += "geen schrikkeljaar";
    }
    else {
        //wel deelbaar door 4
        if(jaartal % 100 !== 0) {
            //wel deelbaar door 4 maar niet door 100
            tekst += "een schrikkeljaar";
        }
        else {
            //wel deelbaar door 4 en ook door 100
            if(jaartal % 400 === 0) {
                // deelbaar door 4, 100 en 400
                tekst += "een schrikkeljaar";
            }
            else {
                //deelbaar door 4 en 100 maar niet door 400
                tekst += "geen schrikkeljaar";
            }
        }
    }
    uitvoerSchrikkeljaar.innerHTML = tekst;
});