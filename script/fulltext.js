//burger menu
var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

 // data from people.html

document.addEventListener('DOMContentLoaded', function () {
    const selectedPerson = JSON.parse(localStorage.getItem('selectedPerson'));

    const imgElement = document.getElementById('selectedImage');
    imgElement.src = selectedPerson.image;

    const fulltextElement = document.getElementById('selectedFulltext');
    fulltextElement.textContent = selectedPerson.fulltext;
});
