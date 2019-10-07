var invoerLeapyear = document.getElementById("invoerLeapyear")
var btnLeapyear = document.getElementById("btnLeapyear");
var uitvoerLeapyear = document.getElementById("uitvoerLeapyear");

btnLeapyear.addEventListener("click", function(){
     let jaartal = invoerLeapyear.Value;
     let tekst = "Het jaar " + jaartal + " is ";
     if(jaartal % 4 !== 0){
         tekst += "geen schrikkeljaar";
     }
    else {
         if(jaartal % 100 !== 0){
             tekst += "een schrikkeljaar";
         }
        else {
            if(jaartal % 400 !==0 )
                tekst += " een schrikkeljaar";
        }
        else {
            tekst += " geen schrikkeljaar";
        }
    }
});
function leapYear(year){
    var result; 
    year = parseInt(document.getElementById("isYear").value);
   if    (jaar % 400 == 0) {
  schrikkel = true;
} else if (jaar % 100 == 0) {
  schrikkel = false;
} else if (jaar % 4   == 0) {
  schrikkel = true;
} else {
  schrikkel = false;
}