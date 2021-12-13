
const myMap = createMap("mapid", 51.21620333495116,4.398255225804206, 15, 'mapbox://styles/arie3/ckwkj2un10m1a14n3dobp7mnl');


let nullSVissen = localStorage.getItem("nullVissen");
let gekregenVissen = localStorage.getItem("obVissen");

let totaalVanVissen = Number(nullSVissen) + Number(gekregenVissen);

console.log(totaalVanVissen);



// console.log(totaalSpelVissen); console.log(totaalSpelFlessen); console.log(totaalSpelMuizen); console.log(totaalSpelCoins);

//Pins//
const myMarker =  createMarker(myMap, "marker-01",50,50, "../../images/pin.png",51.218830171342226,4.394864065454596, false, "<h1>Test</h1><br><a class='mapbutton' href='../minigame/index.html'>Click here</a>");
const markerButton   = document.querySelector('#minigame-button');
  markerButton.onclick = () => {
    const nextPage = 'minigame';
    const coordinates = ''
    const locationName = '';
    location.assign(`../minigame/index.html?totaalVissen=${startAantalVissen}&totaalCoins=${startAantalCoins}&nextPage=${nextPage}`)
  }

  createMarker(myMap, "marker-02",50,50, "../../images/pin.png",51.22018989270523,4.401535621541015, false, "<h1>Test</h1><br><a class='mapbutton' href='../minigame/index.html'>Click here</a>");
  const markerButton2 = document.querySelector('#minigame-button');

  markerButton2.onclick = () => {
    const coordinates = ''
    const locationName = '';
    const nextPage = 'minigame';
    location.assign(`../minigame/index.html?nextPage=${nextPage}`)
  }

  createMarker(myMap, "marker-03",50,50, "../../images/pin.png",51.21837439532294,4.398183912853462, false,  "<h1>Test</h1><br><a class='mapbutton' href='../minigame/index.html'>Click here</a>");
  const markerButton3 = document.querySelector('#minigame-button');

  markerButton3.onclick = () => {
    const coordinates = '51.203275,4.450912'
    const locationName = 'Boelaerpark';
    const nextPage = 'minigame';
    location.assign(`../minigame/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
  }


  const profielButton = document.querySelector('#profiel-button');

  profielButton.onclick = () => {
    const coordinates = '51.203275,4.450912'
    const locationName = 'Boelaerpark';
    const nextPage = 'Profile';
    location.assign(`../profiel/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
  }
  const inventoryButton = document.querySelector('#inventory');

  inventoryButton.onclick = () => {
    const coordinates = '51.203275,4.450912'
    const locationName = 'Boelaerpark';
    const nextPage = 'start';
    location.assign(`../inventory/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
  }
