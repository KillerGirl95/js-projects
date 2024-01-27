/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: project02-01.js
 */

function FTC(degree){
      return (degree-32)/1.8;
}
function CTF(degree){
      return (degree*1.8)+32;
}
document.getElementById('cval').onchange= function(){
      let cdeg= document.getElementById('cval').value;
      document.getElementById('fval').value = CTF(cdeg);
      console.log("cval changed func exectued ")
}
document.getElementById('fval').onchange= function(){
      let fdeg= document.getElementById('fval').value;
      document.getElementById('cval').value = FTC(fdeg);
      console.log("fval changed func executed ")
}
// document.getElementById('cvalue').onchange= c
