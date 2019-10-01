var btnDobbelsteen = document.getElementById("btnDobbelsteen");
var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");

btnDobbelsteen.addEventListener("click", function(){
    let getal = getRandomInt(1,6);
    let image = document.createElement("img");
    
    /*if(getal === 1){
    image.src = "../img/dice_1.png";
    }
    if(getal === 2){
    image.src = "../img/dice_2.png";
    }
    if(getal === 3){
    image.src = "../img/dice-3.png";
    }
    if(getal === 4){
    image.src = "../img/dice_4.png";
    }
    if(getal === 5){
    image.src = "../img/dice_5.png";
    }
    if(getal === 6){
    image.src = "../img/dice_6.png";
    }*/
    
     switch(getal) {
    case 1: 
        image.src = "../img/dice_1.png";
        break;
    case 2: 
        image.src = "../img/dice_2.png";
        break;
    case 3: 
        image.src = "../img/dice-3.png";
        break;
    case 4: 
        image.src = "../img/dice_4.png";
        break;
    case 5: 
        image.src = "../img/dice_5.png";
        break;
    case 6: 
        image.src = "../img/dice_6.png";
        break;
}
    uitvoerDobbelsteen.innerHTML = getal;
    uitvoerDobbelsteen.append(image);
   
});



function getRandomInt (min, max) {
    return Math.round(Math.random() * (max - min )+ min)  ;
}
