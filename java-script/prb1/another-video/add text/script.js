document.getElementById('btn').addEventListener('click',function(){
//where to add
const placeList = document.getElementById('div');
//what to be add
const text = document.createElement('h1');
text.innerText = 'hi,have a good day';
//append child
placeList.appendChild(text);

})



//ei button e click korle remove hobe
document.getElementById('btn-2').addEventListener('click',function(){
  document.getElementById('div').innerHTML='';
  
  })