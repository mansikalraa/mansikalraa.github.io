let timeid, s, start_button;
let incSession=document.getElementById("incSession");
let decSession=document.getElementById("decSession");
let incBreak=document.getElementById("incBreak");
let decBreak=document.getElementById("decBreak");
let start=document.getElementById("start");
let reset=document.getElementById("reset");
let timeDisplay=document.getElementById("timeDisplay");
let sessiontimeDisplay=document.getElementById("sessiontimeDisplay");
let breaktimeDisplay=document.getElementById("breaktimeDisplay");
let sb=document.getElementById("sb");
let flag;
let countdown, smin, ssec, bmin, bsec, min, sec;


initialise();
display();
function initialise(){
  flag="Session";
  start.innerHTML="Start";
  start.disabled=true;
  reset.disabled=true;
  incSession.disabled=false;
  decSession.disabled=false;
  incBreak.disabled=false;
  decBreak.disabled=false;
  s=1, start_button=0;
  smin=0;ssec=0;
  bmin=0;bsec=0;
  min=0;sec=0;
}
function display(){
  setUpTime();
  setTimer();
  sb.innerHTML=flag+" "+s;
  timeDisplay.innerHTML=min.toString().padStart(2,"0") + " : " +sec.toString().padStart(2,"0");
  sessiontimeDisplay.innerHTML=smin.toString().padStart(2,"0") + " min";
  breaktimeDisplay.innerHTML=bmin.toString().padStart(2,"0") + " min";
}

function setUpTime(){
  if(flag=="Session"){
    timeDisplay.style.color="rgb(60, 216, 216)";
    min=smin;
    sec=ssec;
  }
  else{
    min=bmin;
    sec=bsec;
    timeDisplay.style.color="orangered";
  }
}

function setTimer(){
  if(min==0 && sec==0)
    return;
  countdown=(min*60)+sec;
}

/************* SESSION ***************/
incSession.addEventListener("click",function(){
  smin++;
  start.disabled=false;
  reset.disabled=false;
  display();
});

decSession.addEventListener("click",function(){
  if(smin>0)
    smin--;
  if(smin==0){
    start.disabled=true;
    reset.disabled=true;
  }
  display();
});

/************* BREAK ***************/

incBreak.addEventListener("click",function(){
  bmin++;
  display();
});

decBreak.addEventListener("click",function(){
  if(bmin>0)
    bmin--;
  display();
});

/************* END BUTTONS ***************/

start.addEventListener("click",function(){
  incSession.disabled=true;
  decSession.disabled=true;
  incBreak.disabled=true;
  decBreak.disabled=true;
  if(start_button==0){
    start.innerHTML="Pause";
    start_button=1;
    startTimer();
  }
  else{
    start.innerHTML="Start";
    start_button=0;
    pauseTimer();
  }
});

function startTimer(){
  timeid=setInterval(timeChange,1000);
}

function pauseTimer(){
  clearTimeout(timeid);
}

function timeChange(){
  countdown--;
  if(sec===0)
    min--;
  sec=countdown%60;
  if(sec>=0)
    timeDisplay.innerHTML=min.toString().padStart(2,"0") + " : " +sec.toString().padStart(2,"0");
  if(countdown<0 && flag==="Session"){
    flag="Break!";
    sb.innerHTML=flag;
    setUpTime();
    setTimer();
  }
  if(countdown<0 && flag==="Break!"){
    s++;
    flag="Session";
    sb.innerHTML=flag+" "+s;
    setUpTime();
    setTimer();
  }
}

reset.addEventListener("click",function(){
  clearTimeout(timeid);
  initialise();
  display();
});