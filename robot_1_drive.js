var smarti = require("Smartibot");
var counting = false;
var count = 0;
var step = 2;

function go(drive){
if (drive == "B"){
 smarti.setLEDs([10,0,10],[10,0,10]);
 smarti.  setMotor(1,-1);
 smarti.setMotor(2,1);
  step = 4;
 counting = true;
 }
 if (drive == "R"){
 smarti.setLEDs([30,0,30],[30,0,30]);
 smarti.setMotor(1,-1);
 smarti.setMotor(2,-1);
   step = 2;
 counting = true;

 
 }

  if (drive == "SR"){
 smarti.setLEDs([30,0,30],[30,0,30]);
  smarti.setMotor(1,-1);
 smarti.setMotor(2,-1);
   step = 1;
 counting = true;

 
 }
 if (drive == "L"){
 smarti.setLEDs([30,0,30],[30,0,30]);
 smarti.setMotor(1,1);
 smarti.setMotor(2,1);
   step = 2;
 counting = true;
 }
  if (drive == "SL"){
 smarti.setLEDs([30,0,30],[30,0,30]);
 smarti.setMotor(1,1);
 smarti.setMotor(2,1);
   step = 1;
 counting = true;
 }
 else if (drive == "F"){
 smarti.setLEDs([80,0,80],[80,0,80]);
 smarti.setMotor(1,1);
 smarti.setMotor(2,-1);
   step = 4;
 counting = true;
 }
 else if (drive == "S"){
 smarti.setLEDs([0,50,0],[0,50,0]);
 smarti.setMotor(1,0);
 smarti.setMotor(2,0);
 } 
}

setInterval(function() {
 if (counting == true){
 count = count + 1;
 }
 if (count > step){
 counting = false;
 count = 0;
 smarti.setMotor(1,0);
 smarti.setMotor(2,0);
 }
}, 50);