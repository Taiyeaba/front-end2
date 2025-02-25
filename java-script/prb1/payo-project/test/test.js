//bangladesh a click korle bangladesh dekabe usa hide hobe
//usa click korle usa dekabe bangladesh hide hobe
//step 1,,,bangladesh namok btn k dorlam..bangladesh a click korlam
document.getElementById('bangladesh-btn').addEventListener('click',
  function () {
//step 2 bangladesh show korbe & usa hide hobe
document.getElementById('bd').style.display = "block";
document.getElementById('usa').style.display = "none";

  })
  //ekhon usa te click korle usa show korbe bangladesh hide hobe
  document.getElementById('usa-btn').addEventListener('click',
    function () {
  //step 2 uSA show korbe bangladesh hide hobe
  document.getElementById('usa').style.display = "block";
  document.getElementById('bd').style.display = "none";
    })