//step 1 login button k dorlam and click korlam
document.getElementById('login-btn').addEventListener('click', function (event) {//1
  event.preventDefault();//1 reload hobe na
  //step 2 account and pin er id dorbo
  const accountNumber = document.getElementById('Account-number').value;//2
  const pin = document.getElementById('PIN').value;//2
  const convertedPin = parseInt(pin);//4
  //step 3 account nmbr 11 tar kom hole & pin 1234 na hole kaj korbe na
  if (accountNumber.length === 11) {
    if (convertedPin == 1234) {
        window.location.href = "addMoney.html"//5
    }else{
      alert("pin tik nai")
    }
  } else {
    alert("need valid account number")
  }

})