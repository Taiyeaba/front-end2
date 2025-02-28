// //step 1 id dhora
// const counterElement = document.getElementById('counter');//1
// const plusBtn = document.getElementById('plus-btn');//1
// const minusBtn = document.getElementById('minus-btn');//1


// let counter = 0;//3



// //step 2 btn a click korle
// plusBtn.addEventListener('click',function(){ //2
// counter = counter + 1;//3
// counterElement.innerText = counter;//4

// if(counter >= 10){//5
//   plusBtn.setAttribute('disabled',true);//5
// }else{
//   plusBtn.removeAttribute('disabled',false);//5
// }


// })
// minusBtn.addEventListener('click',function(){ //2
//   counter = counter - 1;//3
//   counterElement.innerText = counter;//4

// if(counter <= 0){//5
//   minusBtn.setAttribute('disabled',true);//5
// }else{
//   minusBtn.removeAttribute('disabled',false);
// }


// })



//step 1 id dhora 3 ti
const counterElement = document.getElementById('counter');//1
const plusBtn = document.getElementById('plus-btn');//1
const minusBtn = document.getElementById('minus-btn');//1

let counter = 0;//3

//6
//plus
const updateCounter = function(value){

  counter = counter + value;//3
counterElement.innerText = counter;//4

if(counter >= 10){//5
  plusBtn.setAttribute('disabled',true);//5
}else{
  plusBtn.removeAttribute('disabled',false);//5
}

//minus

if(counter <= 0){//5
minusBtn.setAttribute('disabled',true);//5
}else{
minusBtn.removeAttribute('disabled',false);
}

}

//step 2 btn a click korle
plusBtn.addEventListener('click',function(){ //2
 updateCounter(1);
})
minusBtn.addEventListener('click',function(){ //2
  updateCounter(-1);
})