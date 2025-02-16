const videosContainer = document.getElementById('videosContainer');
const childContainer = videosContainer.firstElementChild;
console.log(childContainer);



for (let i = 0; i < 20; i++){
    const cloneChild =  childContainer.cloneNode(true);
    videosContainer.appendChild(cloneChild);
}