//part 1 data load
const loadCategory = async() => {
  const response =await fetch("https://openapi.programming-hero.com/api/peddy/categories")
  const data = await response.json();
  console.log(data.categories)
}
loadCategory();
//part 2 
const loadCategory = async() => {
  const response =await fetch("https://openapi.programming-hero.com/api/peddy/categories")
  const data = await response.json();
  showcategory(data.categories)
}
const showcategory = (categories) => {
console.log(categories)

}

loadCategory();
//part 3
const loadCategory = async() => {
  const response =await fetch("https://openapi.programming-hero.com/api/peddy/categories")
  const data = await response.json();
  showcategory(data.categories)
}
const showcategory = (categories) => {
categories.forEach((element) => {
  console.log(element)
})

}

loadCategory();
//4 data shoew kora
const loadCategory = async() => {
  const response =await fetch("https://openapi.programming-hero.com/api/peddy/categories")
  const data = await response.json();
  showcategory(data.categories)
}
const showcategory = (categories) => {
categories.forEach((element) => {
  const categoryContainer = document.getElementById('category-container');

  const div = document.createElement("div");
  div.innerHTML = `
  <button>category</button>
  `
  categoryContainer.appendChild(div)
})

}



loadCategory();
//5
const loadCategory = async() => {
  const response =await fetch("https://openapi.programming-hero.com/api/peddy/categories")
  const data = await response.json();
  showcategory(data.categories)
}
const showcategory = (categories) => {
categories.forEach((element) => {
  console.log(element)
  const categoryContainer = document.getElementById('category-container');

  const div = document.createElement("div");
  div.innerHTML = `
  <button class="btn">${element.category}
  <img class="w-8" src=${element.category_icon
  } alt="">
  </button>
  `
  categoryContainer.appendChild(div)
})

}



loadCategory();
//6 ekn chai je dog e click korle dog er data open hobe ,,cat e korle cat er data open hobe.
