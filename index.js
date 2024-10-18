import { Temperature, Length , Mass } from './functions.js'; 



document.getElementById("btn-length").onclick = function(){

  var display1 = document.getElementById("length-section");
  display1.style.display ="block";    //displays the length block

  document.getElementById("btn-length").style.color ="rgba(137, 43, 226, 0.685)";
  document.getElementById("btn-tempetature").style.color ="black";
 document.getElementById("btn-speed").style.color ="black";
 document.getElementById("btn-mass").style.color ="black";
 document.getElementById("btn-fluid").style.color ="black";


  var massHider = document.getElementById("hide2");
  massHider.style.display ="none"; // hides the mass block

  
  var tempHider = document.getElementById("temperature");
  tempHider.style.display ="none"; // hides the temp block

  var speedHider = document.getElementById("speed-section");
  speedHider.style.display = "none";  //hides speed 

  var fluidHider =document.getElementById("fluid");
  fluidHider.style.display ="none"; // hides the fluid block



  // now the calculations

  document.getElementById("btn-convert").onclick =function()
  {
      Length();



      

  }
 
}
      




  

document.getElementById("btn-mass").onclick =function(){

  
  var display2 = document.getElementById("hide2");
  display2.style.display ="block";  /// display the mas block

  document.getElementById("btn-mass").style.color ="rgba(137, 43, 226, 0.685)";
 document.getElementById("btn-tempetature").style.color ="black";
 document.getElementById("btn-speed").style.color ="black";
 document.getElementById("btn-length").style.color ="black";
 document.getElementById("btn-fluid").style.color ="black";

 
 var lengthHider = document.getElementById("length-section");
 lengthHider.style.display ="none"; //  hides the length block

  var tempHider = document.getElementById("temperature");
  tempHider.style.display ="none"; // hides the temp block

  var speedHider = document.getElementById("speed-section");
  speedHider.style.display = "none";  //hides speed 

  var fluidHider =document.getElementById("fluid");
  fluidHider.style.display ="none"; // hides the fluid block

  
  
  // now the calculations


  document.getElementById("btn-convert2").onclick = function(){
    

 // CALCULATIONS
 

  Mass();



 }
  



}

document.getElementById("btn-tempetature").onclick = function(){
   var display3 = document.getElementById("temperature");
   display3.style.display ="block"; //display the temp

   document.getElementById("btn-tempetature").style.color ="rgba(137, 43, 226, 0.685)";
   document.getElementById("btn-length").style.color ="black";
  document.getElementById("btn-speed").style.color ="black";
  document.getElementById("btn-mass").style.color ="black";
  document.getElementById("btn-fluid").style.color ="black";
  


   var massHider = document.getElementById("hide2");
   massHider.style.display ="none"; // hides the mass block

   var lengthHider = document.getElementById("length-section");
   lengthHider.style.display ="none"; //  hides the length block

   var speedHider = document.getElementById("speed-section");
   speedHider.style.display = "none";  //hides speed 

   var fluidHider =document.getElementById("fluid");
   fluidHider.style.display ="none"; // hides the fluid block

  // now the calculations

  document.getElementById("btn-convert3").onclick = function(){

    Temperature();
  
  }



   

}

document.getElementById("btn-speed").onclick =function(){
   var display4 = document.getElementById("speed-section");
   display4.style.display = "block";

   document.getElementById("btn-speed").style.color ="rgba(137, 43, 226, 0.685)";
   document.getElementById("btn-length").style.color ="black";
  document.getElementById("btn-tempetature").style.color ="black";
  document.getElementById("btn-mass").style.color ="black";
  document.getElementById("btn-fluid").style.color ="black";
  
   

   var massHider = document.getElementById("hide2");
   massHider.style.display ="none"; // hides the mass block

   var lengthHider = document.getElementById("length-section");
   lengthHider.style.display ="none"; //  hides the length block

   var tempHider = document.getElementById("temperature");
   tempHider.style.display ="none"; // hides the temp block

   var fluidHider =document.getElementById("fluid");
   fluidHider.style.display ="none"; // hides the fluid block

  // now the calculations
}

document.getElementById("btn-fluid").onclick = function(){
    var display5 = document.getElementById("fluid");
    display5.style.display ="block";

    document.getElementById("btn-fluid").style.color ="rgba(137, 43, 226, 0.685)";
    document.getElementById("btn-length").style.color ="black";
   document.getElementById("btn-tempetature").style.color ="black";
   document.getElementById("btn-mass").style.color ="black";
   document.getElementById("btn-speed").style.color ="black";


    var massHider = document.getElementById("hide2");
    massHider.style.display ="none"; // hides the mass block
 
    var lengthHider = document.getElementById("length-section");
    lengthHider.style.display ="none"; //  hides the length block
 
    var tempHider = document.getElementById("temperature");
    tempHider.style.display ="none"; // hides the temp block
    
    var speedHider = document.getElementById("speed-section");
    speedHider.style.display = "none";  //hides speed 
 
  // now the calculations
}


  






