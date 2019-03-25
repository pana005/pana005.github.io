var now, circle, sec, min, hr,time, timeHolder ;

function updateTime(){
  var now = new Date; //time right now
  //test var circle = document.querySelector(".circle");
  var r01 = document.querySelector(".r01");
  var r02 = document.querySelector(".r02");
  var r03 = document.querySelector(".r03");
  var r04 = document.querySelector(".r04");
  var r3 = document.querySelector(".r3");
  var r3all = document.querySelectorAll(".r3");
  var r2all = document.querySelectorAll(".r2");

  var sec = now.getSeconds(); //value of sec
  var min = now.getMinutes(); //value of min
  var hr = now.getHours(); //value of hr
  var time = now.toTimeString(); //display time in comp format
  //var x = 0;

//Seconds
  //if(hr)
  if(sec%2 == 0){
    r01.style.backgroundColor = "black";
    r01.style.width = "10px";
  }else{
    r01.style.backgroundColor = "red";
    r01.style.width ="20px";
  }
  if(sec == 15){
    r02.style.backgroundColor = "red";
  }else{
    r02.style.backgroundColor = "black";
  }
  if (sec == 30){
    r03.style.backgroundColor = "red";
  }else{
    r03.style.backgroundColor = "black";
  }
  if (sec == 45){
    r04.style.backgroundColor = "red";
  }else{
    r04.style.backgroundColor = "black";
  }
//Minute
  if(min%2 != 0){
    r3all[0].style.backgroundColor = "lightGreen";
    r3all[1].style.backgroundColor= "pink";
    r3all[2].style.backgroundColor = "lightGreen";
    r3all[3].style.backgroundColor= "pink";
    r3all[4].style.backgroundColor = "lightgreen";
    r3all[5].style.backgroundColor= "pink";
    r3all[6].style.backgroundColor = "lightGreen";
    r3all[7].style.backgroundColor= "pink";
    r3all[8].style.backgroundColor = "lightGreen";
    r3all[9].style.backgroundColor= "pink";
    r3all[10].style.backgroundColor = "lightGreen";
    r3all[11].style.backgroundColor= "pink";
  }else{
    r3all[0].style.backgroundColor = "blue";
    r3all[1].style.backgroundColor = "blue";
    r3all[2].style.backgroundColor = "blue";
    r3all[3].style.backgroundColor = "blue";
    r3all[4].style.backgroundColor = "blue";
    r3all[5].style.backgroundColor = "blue";
    r3all[6].style.backgroundColor = "blue";
    r3all[7].style.backgroundColor = "blue";
    r3all[8].style.backgroundColor = "blue";
    r3all[9].style.backgroundColor = "blue";
    r3all[10].style.backgroundColor = "blue";
    r3all[11].style.backgroundColor = "blue";
  }
  if(min > 40){
    r2all[0].style.backgroundColor= "grey";
    r2all[8].style.backgroundColor= "grey";
  }
  if(min > 10){
    r2all[1].style.backgroundColor= "red";
  }
  if(min > 20){
    r2all[2].style.backgroundColor= "orange";
    r2all[3].style.backgroundColor= "orange";
  }
  if(min > 30){
    r2all[4].style.backgroundColor= "yellow";
  }
  if(min > 40){
    r2all[5].style.backgroundColor= "green";
    r2all[6].style.backgroundColor= "green";
  }
  if(min > 50){
    r2all[7].style.backgroundColor= "purple";
  }
  if(min<10){
    r2all[0].style.backgroundColor= "black";
    r2all[1].style.backgroundColor= "black";
    r2all[2].style.backgroundColor= "black";
    r2all[3].style.backgroundColor= "black";
    r2all[4].style.backgroundColor= "black";
    r2all[5].style.backgroundColor= "black";
    r2all[6].style.backgroundColor= "black";
    r2all[7].style.backgroundColor= "black";
    r2all[8].style.backgroundColor= "black";
  }


}

//updateTime();

setInterval(updateTime, 1000);