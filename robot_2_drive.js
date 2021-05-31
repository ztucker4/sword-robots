var smarti = require("Smartibot");
var counting = false;
var count = 0;
var step = 2;

function go(drive){
if (drive == "B"){
 smarti.setLEDs([10,10,0],[10,10,0]);
 smarti.  setMotor(1,-1);
 smarti.setMotor(2,1);
  step = 4;
 counting = true;
 }
 if (drive == "R"){
 smarti.setLEDs([30,30,0],[30,30,0]);
 smarti.setMotor(1,-0.65);
 smarti.setMotor(2,-0.65);
   step = 2;
 counting = true;

 
 }

  if (drive == "SR"){
 smarti.setLEDs([30,30,0],[30,30,0]);
  smarti.setMotor(1,-0.6);
 smarti.setMotor(2,-0.6);
   step = 1;
 counting = true;

 
 }
 if (drive == "L"){
 smarti.setLEDs([30,30,0],[30,30,0]);
 smarti.setMotor(1,0.65);
 smarti.setMotor(2,0.65);
   step = 2;
 counting = true;
 }
  if (drive == "SL"){
 smarti.setLEDs([30,30,0],[30,30,0]);
 smarti.setMotor(1,0.6);
 smarti.setMotor(2,0.6);
   step = 1;
 counting = true;
 }
 else if (drive == "F"){
 smarti.setLEDs([100,100,0],[100,100,0]);
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