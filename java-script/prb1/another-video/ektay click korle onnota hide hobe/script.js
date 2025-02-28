//step 1 bangladesh namok btn k dorlam and click korlam
document.getElementById('bangladesh-btn').addEventListener('click',function(){
//step 2 bangladesh show korbe and usa hide hobe
document.getElementById('bd').style.display = "block";
document.getElementById('usa').style.display = "none";

})
//step 1 usa namok btn k dorlam and click korlam
document.getElementById('usa-btn').addEventListener('click',function(){
//step 2 usa show korbe and bd hide hobe
document.getElementById('bd').style.display = "none";
document.getElementById('usa').style.display = "block";
})