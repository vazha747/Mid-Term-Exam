const famousPersons = [
    {   
        image: "images/Levan_Saginashvili_at_Vendetta_TOP_8_in_Rumia,_Poland.jpg",
        name: "Levan saginashvili",
        text: "Levan Saginashvili, nicknamed Georgian Hulk, is a Georgian professional arm-wrestler. Winner of the World Armwrestling Championship seven times, the European arm-wrestling championship six times, and the Vendetta Top 8, Saginashvili is the World's number 1 ranking armwrestler at the moment.",
    },
    {
        image: "images/lasha.webp",
        name: "Lasha Talakhadze",
        text: "Lasha Talakhadze is a Georgian weightlifter, holding the all-time world records regardless of weight category in the snatch, the clean and jerk, and the total since 2021. Talakhadze is a two-time Olympic champion, seven-time world champion, and seven-time European champion competing in the super-heavyweight category.",
    },
    {
        image: "images/meraba.jpg",
        name: "Merab Dvalishvili",
        text: "Merab Dvalishvili is a Georgian professional mixed martial artist. He currently competes in the Bantamweight division in the Ultimate Fighting Championship. As of August 22, 2023, he is #2 in the UFC bantamweight rankings.",
    },
    {
        image: "images/stalini.jpg",
        name: "Joseph Stalin",
        text: "Joseph Vissarionovich Stalin was a Soviet revolutionary and politician who was the leader of the Soviet Union from 1924 until his death in 1953. He held power as General Secretary of the Communist Party of the Soviet Union and Chairman of the Council of Ministers of the Soviet Union.",
    },
    {
        image: "images/eduardi.jpg",
        name: "Eduard Shevardnadze",
        text: "Eduard Ambrosis dze Shevardnadze was a Soviet and Georgian politician and diplomat who governed Georgia for several non-consecutive periods from 1972 until his resignation in 2003 and also served as the final Soviet Minister of Foreign Affairs from 1985 to 1990.",
    },
    {
        image: "images/Lavrentiy_Beria.webp",
        name: "Lavrentiy Beria",
        text: "Lavrentiy Beria (1899-1953), marshal of the Soviet Union and main ideologist and architect, as well as chief of the Soviet secret police, NKVD",
    },
    {
        image: "images/khvicha.jpg",
        name: "Khvicha Kvaratskheli",
        text: "Khvicha Kvaratskhelia, also known as Kvara, is a Georgian professional footballer who plays as a left winger for Serie A club Napoli and the Georgia national team. Kvaratskhelia started his senior career playing for Dinamo Tbilisi at age 16, before departing to Rustavi where he spent half a season.",
    },
    {
        image: "images/peter.webp",
        name: "Peter Bagrationi",
        text: "He Was Georgian",
    },
    {
        image: "images/download.webp",
        name: "Giorgi Chakvetadze",
        text: "Giorgi Chakvetadze (Georgian: გიორგი ჩაკვეტაძე; born 29 August 1999) is a Georgian professional footballer who plays as an attacking midfielder or left winger for EFL Championship club Watford, on loan from Gent, and the Georgia national team. Chakvetadze has earned the Player of the Year award in Georgia. He has also won the Slovak First League with Slovan Bratislava.",
    },
    {
        image: "images/G._Mazniashvili.jpg",
        name: "Giorgi Mazniashvili",
        text: "Giorgi Mazniashvili (Georgian: გიორგი მაზნიაშვილი) (6 April 1870 - 16 December 1937) was a Georgian general and one of the most prominent military figures in the Democratic Republic of Georgia (1918-1921). During the service in the Russian army.",
    },
];

const container = document.getElementById("container");

famousPersons.forEach((person) => {
   const content = document.createElement("div");
   content.className = "content-container";

   const imgContainer = document.createElement("div");
   imgContainer.className = "img-container";
   
   const img = document.createElement("img");
   img.src = person.image;
   img.alt = `${person.name} photo`;

   imgContainer.appendChild(img);
   content.appendChild(imgContainer);

   const namePara = document.createElement("p");
   namePara.textContent = `Name: ${person.name}`;
   content.appendChild(namePara);

   const textSpan = document.createElement("span");
   textSpan.textContent = person.text;
   content.appendChild(textSpan);

   container.appendChild(content);
});


//burger menu 
var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});