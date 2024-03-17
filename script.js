
var context= new AudioContext();
function jsNota(frecuencia) {
var o = context.createOscillator();
g = context.createGain();
o.connect(g);
o.type="sawtooth";
o.frequency.value = frecuencia ;
g.connect(context.destination);
o.start(0);
g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime +1.5);
}


function noteRandom(){

    
    var min = 1;
    var max = 31;
    var note = min-1;

    while (note < min || note > max){       
    note = parseInt(Math.random()*100);
    }
    
    console.log("The note is: "+ note);
 


if (note == 1){
    sound = 164.81;
} else if (note==2){
    sound = 174.61;
} else if (note==3){
    sound = 185;
} else if (note==4){
    sound = 196;
} else if (note==5){
    sound = 207.65;
} else if (note==6){
    sound = 220;
} else if (note==7){
    sound = 233.08;
} else if (note==8){
    sound = 246.94;
} else if (note==9){
    sound = 261.63;
} else if (note==10){
    sound = 277.18;
} else if (note==11){
    sound = 293.66;
} else if (note==12){
    sound = 311.13;
} else if (note==13){
    sound = 329.63;
} else if (note==14){
    sound = 349.23;
} else if (note==15){
    sound = 369.99;
} else if (note==16){
    sound = 392;
} else if (note==17){
    sound = 415.3;
} else if (note==18){
    sound = 440;
} else if (note==19){
    sound = 466.16; 
} else if (note==20){
    sound = 493.88;
} else if (note==21){
    sound = 523.25;
} else if (note==22){
    sound = 554.37;
} else if (note==23){
    sound = 587.33;
} else if (note==24){
    sound = 622.25;
} else if (note==25){
    sound = 659.25;
} else if (note==26){
    sound = 698.46;
} else if (note==27){
    sound = 739.99;
} else if (note==28){
    sound = 783.39;
} else if (note==29){
    sound = 830.61;
} else if (note==30){
    sound = 880;
} else if (note==31){
    sound = 932.33;              
} else {





    sound = "note without number";
}



switch (note){
    case 1:
    imagenMostrada.src = "images/f0s.jpg";
    break;
    
    case 2:
    imagenMostrada.src = "images/g0.jpg";
    break;

    case 3:
    imagenMostrada.src = "images/g0s.jpg";
    break;
    
    case 4:
    imagenMostrada.src = "images/a0.jpg";
    break;
    
    case 5:
    imagenMostrada.src = "images/b0b.jpg";
    break;
    
    case 6:
    imagenMostrada.src = "images/b0.jpg";
    break;

    case 7:
    imagenMostrada.src = "images/c1.jpg";
    break;
    
    case 8:
    imagenMostrada.src = "images/c1s.jpg";
    break;

    case 9:
    imagenMostrada.src = "images/d1.jpg";
    break;

    case 10:
    imagenMostrada.src = "images/e1b.jpg";
    break;
    
    case 11:
    imagenMostrada.src = "images/e1.jpg";
    break;

    case 12:
    imagenMostrada.src = "images/f1.jpg";
    break;

    case 13:
    imagenMostrada.src = "images/f1s.jpg";
    break;

    case 14:
    imagenMostrada.src = "images/g1.jpg";
    break;
    
    case 15:
    imagenMostrada.src = "images/g1s.jpg";
    break;

    case 16:
    imagenMostrada.src = "images/a1.jpg";
    break;

    case 17:
    imagenMostrada.src = "images/b1b.jpg";
    break;
    
    case 18:
    imagenMostrada.src = "images/b1.jpg";
    break;

    case 19:
    imagenMostrada.src = "images/c2.jpg";
    break;

    case 20:
    imagenMostrada.src = "images/c2s.jpg";
    break;

    case 21:
    imagenMostrada.src = "images/d2.jpg";
    break;

    case 22:
    imagenMostrada.src = "images/e2b.jpg";
    break;
    
    case 23:
    imagenMostrada.src = "images/e2.jpg";
    break;

    case 24:
    imagenMostrada.src = "images/f2.jpg";
    break;

    case 25:
    imagenMostrada.src = "images/f2s.jpg";
    break;

    case 26:
    imagenMostrada.src = "images/g2.jpg";
    break;
    
    case 27:
    imagenMostrada.src = "images/g2s.jpg";
    break;

    case 28:
    imagenMostrada.src = "images/a2.jpg";
    break;

    case 29:
    imagenMostrada.src = "images/b2b.jpg";
    break;
    
    case 30:
    imagenMostrada.src = "images/b2.jpg";
    break;

    case 31:
    imagenMostrada.src = "images/c3.jpg";
    break;



  };


console.log("The note sound is: " + sound);

document.getElementById("fnum").innerHTML = sound;
document.getElementById("fnum2").innerHTML = "<button class="+"bn19" +"onclick= "+"jsNota(466.16)"+"> C</button>";


}
