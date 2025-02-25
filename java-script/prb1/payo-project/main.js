//id  k dorlam
document.getElementById('add-money').addEventListener('click',
  function (event){
 event.preventDefault();//reload hobe na
 //ammount k dorbo
 const amount = document.getElementById('Amount').value;
 const convertedAmount = parseFloat(amount);
 //pin
 const pin = document.getElementById('pin').value;
 const convertedpin = parseFloat(pin);
 //
 const mainBalance = document.getElementById('main-balance').innerText;
 const convertedMainBalance = parseFloat(mainBalance);

 if(convertedpin === 1234){
  const sum = convertedMainBalance + convertedAmount;
  document.getElementById('main-balance').innerText = sum;
 }
 else{
  console.log("pin tik na")
 }
  })