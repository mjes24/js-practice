// Behoben: Fehlende Kommas zwischen Array-Elementen hinzugefügt
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",  // Komma hinzugefügt
  "#616A6B",  // Komma hinzugefügt
  "#4A235A",  // Komma hinzugefügt
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];



// Rundet die Zufallszahl auf eine ganze Zahl ab
function getRandomIndex() {
  console.log(Math.floor(darkColorsArr.length * Math.random()))
}
getRandomIndex()

// Fehler behoben: querySelector mit großem S schreiben
const body = document.querySelector("body");
// Fehler behoben: # vor der ID hinzugefügt
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");


function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}


// Korrektur: ID muss mit der HTML übereinstimmen
const btn = document.querySelector("#btn"); // or whatever the actual ID is


// Fehler behoben: Funktion ohne () zuweisen (nicht aufrufen)
btn.onclick = changeBackgroundColor;





