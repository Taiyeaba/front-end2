function loadCategories() {
  //1 fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  //2 convert promise to json
 .then((res) => res.json())
 //3 send data to display
 .then((data) => displayCategories(data.categories));

}
function displayCategories(categories){
  //get the container
  const catagoryContainer = document.getElementById("catagory-container");
  //loop operation on array of obj
  for(let cat of categories){
    console.log(cat);
//create element
const categoryDiv = document.createElement("div");
categoryDiv.innerHTML = `
 <button class="btn btn-sm">${cat.category}</button>
`
  //append the element
  catagoryContainer.append(categoryDiv);
  }
  
}
loadCategories();


