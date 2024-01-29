//burger menu
var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

const information = [
       {
        text: "Georgia (Georgian: საქართველო, romanized: sakartvelo,) is a transcontinental country located in Eastern Europe[10][11][12] and West Asia. It is part of the Caucasus region, bounded by the Black Sea to the west, Russia to the north and northeast, Turkey to the southwest, Armenia to the south, and by Azerbaijan to the southeast. The country covers an area of 69,700 square kilometres (26,900 sq mi), and has a population of 3.7 million people.[b][13] Tbilisi is its capital and largest city, home to roughly a third of the Georgian population. Georgia has been a wine production site since 6,000 BC, being the earliest known location of winemaking in the world.[14][15] During the classical era, several kingdoms emerged in what is now Georgia, such as Colchis and Iberia. In the early 4th century, Georgians officially adopted Christianity, which contributed to the unification of early Georgian states. In the Middle Ages, the unified Kingdom of Georgia reached its Golden Age during the reign of King David IV and Queen Tamar. Thereafter, the kingdom declined and eventually disintegrated under the hegemony of various regional powers, including the Mongols, the Ottoman Empire, and various dynasties of Persia. In 1783, one of the Georgian kingdoms entered into an alliance with the Russian Empire but Russia reneged on its promises and instead proceeded to annex the territory of modern Georgia piece-by-piece against the wish of the local rulers. After the Russian Revolution in 1917, Georgia emerged as an independent republic under German protection.[16] Following World War I, Georgia was invaded and annexed by the Soviet Union in 1922, becoming one of its constituent republics. In the 1980s, an independence movement grew quickly, leading to Georgia's secession from the Soviet Union in April 1991. For most of the subsequent decade, post-Soviet Georgia suffered from economic crisis, political instability and secessionist wars in Abkhazia and South Ossetia. Following the peaceful Rose Revolution in 2003, Georgia strongly pursued a pro-Western foreign policy; it introduced a series of democratic and economic reforms aimed at integration into the European Union and NATO. The country's Western orientation soon led to worsening relations with Russia, which culminated in the Russo-Georgian War of 2008, and entrenched Russian occupation of a portion of Georgia. Georgia is a representative democracy governed as a unitary parliamentary republic.[17][18] It is a developing country with a very high Human Development Index. Economic reforms since independence have led to higher levels of economic freedom, as well as reductions in corruption indicators, poverty, and unemployment. It was one of the first countries in the world to legalize cannabis, becoming the only former-socialist state to do so. The country is a member of international organizations, such as the Council of Europe, Eurocontrol, BSEC, GUAM, and the Energy Community. Georgia forms part of the Association Trio and is an EU candidate country.",
        map: "historyImages/georgia-map-simple.jpg",
       },
       {
        img: "",
        name: "",
        text: "",
        map: "",
       },
       {
        img: "",
        name: "",
        text: "",
        map: "",
       },
       {
        img: "",
        name: "",
        text: "",
        map: "",
       },
       {
        img: "",
        name: "",
        text: "",
       },
       {
        img: "",
        name: "",
        text: "",
       },

       {
        img: "",
        name: "",
        text: "",
       },
];