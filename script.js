let hoursHTML=document.getElementById("hours");
let minutesHTML=document.getElementById("minutes");
let secondsHTML=document.getElementById("seconds");


const mydate=()=>
  {
    let date=new Date();

    // get current Time 
    let Hours=date.getHours();
    let Minutes=date.getMinutes()
    let Seconds=date.getSeconds()
    
    if(Hours<10){
      Hours="0" + Hours;
    }
    
    if(Minutes<10){
      Minutes="0" + Minutes;
    }
    
    if(Seconds<10){
      Seconds="0" + Seconds;
    }

    // Hours = (Hours<10) ? "0" + Hours : Hours;
    // Minutes = (Minutes<10) ? "0" + Minutes : Minutes;
    // Seconds = (Seconds<10) ? "0" + Seconds : Seconds;

    hoursHTML.innerHTML=Hours
    minutesHTML.innerHTML=Minutes
    secondsHTML.innerHTML=Seconds
  }

setInterval(mydate,1000)