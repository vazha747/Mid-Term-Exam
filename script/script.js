// landmarks 
const landmarks = [
    {
        image: "landmarks/Georgia8.10web5.jpg",
        alt: "svaneti and its famous towers",
    },
    {
        image: "landmarks/natural-wonders-of-georgia-makhuntseti-waterfall.jpg",
        alt: "waterfall",
    },
    {
        image: "landmarks/Visit-Georgia-in-Europe.jpg",
        alt: "beautioful mountain sight ",
    },
    {
        image: "landmarks/why-georgia-nature.webp",
        alt: "nice lake close to mountain range",
    },
];
const contentImages = document.getElementById("main-content");

landmarks.forEach((landMark) => {
  const content = document.createElement("div");
  content.className = "imageContainer";
  
  const img = document.createElement("img");
  img.src = landMark.image;
  img.alt = landMark.alt;

  content.appendChild(img);

  contentImages.appendChild(content);
});

//burger menu
var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// food pics
const foodImages = [
{
    image: "foodimages/Georgian_Cuisine_Qata.width-1605.height-583.format-webp.webp",
    alt: "goergian traditional sufra on stone table",
    numbertext: "1",
    caption: "one",
},
{
    image: "foodimages/georgian-food-khinkali.jpg.webp",
    alt: "khinkhali",
    numbertext: "2",
    caption: "two",
},
{
    image: "foodimages/image-import.jpg",
    alt: " georgian cuzine",
    numbertext: "3",
    caption: "three",
},
{
    image: "foodimages/Foods4.jpg",
    alt: "imeruli khachapuri",
    numbertext: "4",
    caption: "four",
},
{
    image: "foodimages/Home-page-1-Elegant-supra.webp",
    alt: "adjaruli khachapuri",
    numbertext: "5",
    caption: "five",
},
{
    image: "foodimages/3-Adjarian-Khachapuri.jpg",
    alt: "georgian traditional sufra",
    numbertext: "6",
    caption: "six",
},
{
    image: "foodimages/xachapuri-4-650x381.jpg",
    alt: "georgian traditional food khacapuri",
    numbertext: "7",
    caption: "seven",
},
]; 

// code to help with slider
const slideShow = document.getElementById("slideshow-container");

foodImages.forEach((slider, index) => {
    const fade = document.createElement("div");
    fade.className = "mySlides fade";

    const number = document.createElement("div");
    number.className = "numbertext";

    const foodPic = document.createElement("img");
    foodPic.src = slider.image;
    foodPic.alt = `${slider.alt}`;

    const text = document.createElement("div");
    text.className = "text";

    fade.appendChild(number);
    fade.appendChild(foodPic);
    fade.appendChild(text);

    slideShow.appendChild(fade);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Define createSlideElement function before using it
function createSlideElement(slider, index) {
    const fade = document.createElement("div");
    fade.className = "mySlides fade";

    const number = document.createElement("div");
    number.className = "numbertext";
    number.textContent = `${index + 1}`;

    const foodPic = document.createElement("img");
    foodPic.src = slider.image;
    foodPic.alt = slider.alt;

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = slider.caption;

    fade.appendChild(number);
    fade.appendChild(foodPic);
    fade.appendChild(text);

    return fade;
}

function initSlideShow() {
    const slideShow = document.getElementById("slideshow-container");
    foodImages.forEach((slider, index) => {
        const slideElement = createSlideElement(slider, index);
        slideShow.appendChild(slideElement);
    });
}

initSlideShow();
