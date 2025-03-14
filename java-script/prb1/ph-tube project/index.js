function loadCategories() {
  //1 fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //2 convert promise to json
    .then((res) => res.json())
    //3 send data to display
    .then((data) => displayCategories(data.categories));

}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}





function displayCategories(categories) {
  //get the container
  const catagoryContainer = document.getElementById("catagory-container");
  //loop operation on array of obj
  for (let cat of categories) {
    //console.log(cat);
    //create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
 <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
`
    //append the element
    catagoryContainer.append(categoryDiv);
  }

}

const displayVideos = (videos) => { //arrow function
 const videoContainer = document.getElementById("video-container");

 videos.forEach((video) => {
 // console.log(video);

 const videoCard = document.createElement("div");
 videoCard.innerHTML =`

<div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover" src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute bottom-2 right-2 rounded text-white bg-black px-2 text-sm">3hrs 56 min ago</span>
        </figure>

        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="text-sm font-semibold">
              Midnight Serenade
            </h2>
            <p class="text-sm text-gray-400 flex gap-1">Awlad Hossain <img
               class="w-5 h-5"
               src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
               <p class="text-sm text-gray-400">91K views</p>
          </div>




        </div>
      </div>

 `;

 videoContainer.append(videoCard);
 
 });
  

}


loadCategories();
loadVideos();

