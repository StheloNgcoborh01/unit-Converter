export function Length() {
  var inputType = document.getElementById("from");
  var resultType = document.getElementById("btn-change2");
  
  var input = document.getElementById("btn-input");
  var displayResult = document.getElementById("result");
  
  var inputTypeValue,ResultTypeValue;
  
  inputTypeValue = inputType.value;
  ResultTypeValue  = resultType.value;

  const ConversionFactor = {

      Centimeters: {
          Centimeters : 1,
          meters : 0.01,
          milimeters: 10,
          kilometer: 100000,
          inches : 0.393701,
          foots : 0.0328084,
          
      },

      meters:{
        meters : 1,
          Centimeters :100 ,
          milimeters: 1000,
          kilometer: 0.001,
          inches : 39.3701,
          foots : 3.28084,

      },

      kilometer:{
         kilometer : 1,
         meters : 1000,
         Centimeters :100000 ,
         milimeters: 1000000,
         inches : 39370.1,
         foots : 3280.84,

      },

      milimeters:{
              milimeters: 1,
              kilometer : 1000000,
              meters : 0.001,
              Centimeters : 0.1,
              inches : 0.0393701,
              foots : 0.00328084,
      },

      inches:{
           inches : 1,
           milimeters: 25.4,
           kilometer : 0.0000254001,
           meters : 0.0254,
           Centimeters : 2.54,
           foots : 0.0833333,

      },

      foots:{
          foots: 1,
          milimeters: 304.8,
          kilometer : 0.0003048,
          meters : 0.3048,
          Centimeters : 30.48,
         inches: 12
      }


  }


    displayResult.value = Number(input.value) * ConversionFactor[inputTypeValue][ResultTypeValue];

 

}

export function Temperature(){


  var inputype = document.getElementById("frrom");
  var resultype = document.getElementById("btn-change3");
  

  var inputer = document.getElementsByClassName("Btninput");
  var displayResulter =  document.getElementsByClassName("resulter");


  var inputTypeValuer,ResultTypeValuer;
  
  inputTypeValuer = inputype.value;
  ResultTypeValuer  = resultype.value;


  const converstionFactor3 = {
    degrees:{
      degrees : 1,
      kelvin: 274.15,
      ferenheight : 33.8
    },

    kelvin:{
        kelvin : 1,
        degrees : -272.1,
        ferenheight : -457.9
    },

    ferenheight:{
      ferenheight : 1,
      degrees : -17.22,
      kelvin:255.928

    }


  }

  
  displayResulter.value = Number(inputer.value) + converstionFactor3[inputTypeValuer][ResultTypeValuer];

  
}





export function Mass(){
   
  var inputType = document.getElementById("from");
  var resultType = document.getElementById("btn-change2");
   
  var input = document.getElementById("btn-input");
  var display = document.getElementById("result");
   
  var inputTypeValue,ResultTypeValue;
   
  inputTypeValue = inputType.value;
  ResultTypeValue  = resultType.value;
   
  
  const ConversionFactor2 = {

    kilogram : 
       {
       kilogram: 1,
       gram :  1000
       },
  
       gram :
       {
        gram : 1,
        kilogram : 0.001
       }

  }

  display.value = Number(input.value) * ConversionFactor2[inputTypeValue][ResultTypeValue];



}








