//1 btn e click korle post btn clicked lekati show korbe
document.getElementById('btn-post-comment')
.addEventListener('click',function () {
 // console.log('post btn clicked')

 //2 comment text area te je jinis leksi seta niya aste chai..jehetu niya asbo tai id use korb
 const commentTextBox = document.getElementById('comment-text-box');
 const newComment = commentTextBox.value;
 //console.log(newComment);
 
 //3 get the parents node where to publish comment
 const commentContainer = document.getElementById('comment-container')
 console.log(commentContainer);

 //4 create a comment p and set the innertext
 const commentElement = document.createElement('p');
 commentElement.classList.add('comment');
 commentElement.innerText = newComment;

 //5 append the new p tag to the parent node
 commentContainer.appendChild(commentElement);

 //6 clean the text area
 commentTextBox.value= '';
})