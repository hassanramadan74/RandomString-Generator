var theQuotePara = document.getElementById("paragraph");
var theWriterPara = document.getElementById("second-paragraph");
var Quote = [
  "You miss 100% of the shots you don't take.",
  "Do not take life too seriously. You will not get out alive.",
  "It's not what happens to you, but how you react to it that matters.",
  "Resentment is like drinking poison and waiting for your enemies to die."
];
var Writers=[
  "--Wayne Gretzky",
  "--Elbert Hubbard",
  "--Epictetus",
  "--Nelson Mandela"
]
function RandomClick() {
  var randomItem = Math.floor(Math.random() * Quote.length);
  var randomQuote = Quote[randomItem];
  theQuotePara.innerHTML = randomQuote;
  var randomWriter = Writers[randomItem];
  theWriterPara.innerHTML = randomWriter ; 
}
