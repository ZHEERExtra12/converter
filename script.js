const select=document.getElementById("sel") /*this is the selecter*/

const kg= document.getElementById("kg")
const km= document.getElementById("km")
const c= document.getElementById("c")
/*this is the options*/

const input1= document.getElementById("inputI")
const input2= document.getElementById("inputII")
/*this is the inputs*/



function kgTOlb() {
        var number= parseFloat(input1.value)
          return  (number*2.20462).toFixed(3)+" LB"
}

function kmToml() {
        var number= parseFloat(input1.value)
          return (number*0.621371).toFixed(3)+" M"
}

function cTOk() {
        var number= parseFloat(input1.value)
          return (number+273).toFixed(3)+ " k"
}

function cTOf() {
        var number= parseFloat(input1.value)
        return ((number*1.8)+32).toFixed(3)+" F"
}
/*......*/

function revTOrad() {
        var number= parseFloat(input1.value)
        return (number* 6.28).toFixed(3)+" rad"
}

function degTOrev() {
        var number= parseFloat(input1.value)
        return (number*(139/50000)).toFixed(3)+" rev"
}

function hTOm (){
        var number= parseFloat(input1.value)
        return (number*60).toFixed(3)+" min"
}

function hTOs() {
        var number= parseFloat(input1.value)
        return (number*3600).toFixed(3)+" sec"
}

function yTOh() {
        var number= parseFloat(input1.value)
        return (number*8766).toFixed(3)+" h"
}

function se() {

        return input1.value.ariaPlaceholder="Select a Coversion"
}








document.getElementById("btn").addEventListener("click", function(){
          if(select.value === "kg"){
                  input2.value=  kgTOlb()
          }
          if(select.value === "km"){
                    input2.value=  kmToml()
          }

          if(select.value === "ck"){
                    input2.value=  cTOk()

          }
          if(select.value === "cf"){
                input2.value=  cTOf()

          }
          /* ----------------*/
          if(select.value === "rev"){
                input2.value=  revTOrad()

          }
          if(select.value === "deg"){
                input2.value=  degTOrev()

          }
          if(select.value === "hm"){
                input2.value=  hTOm ()

          }
          if(select.value === "hs"){
                input2.value=  hTOs()

          }
          if(select.value === "yh"){
                input2.value=  yTOh()

          }
          if(select.value === "s"){
                input2.value= se()
        

          }






})