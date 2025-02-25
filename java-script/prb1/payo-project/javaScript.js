//1 id k dorlam..login e click korle
document.getElementById('login-btn').addEventListener('click',
  function(event){
 event.preventDefault();
 //2 input 2 tike dorbo
 const accountNumber = document.getElementById('Account-number').value;
 const pin = document.getElementById('pin').value;
 //console.log(accountNumber,pin);
 //3 account nmbr 11 tar kom hole & pin 1234 na hole kaj korbe na
 const convertedPin=parseInt(pin)
 if(accountNumber.length === 11){
  if(convertedPin===1234){
   // console.log("oky,tik asey")
   window.location.href="main.html"
  }
  else{
    //console.log("pin not tik")
    alert("pin tik nai")
  }
 }
 else{
  //console.log("need valid account number")
  alert("need valid account number")
 }
 //4 ekhon login e click korle onno pg a jabe ..jar jonno new file 
 // kulbo jar nam main.html
  })