function eatTacos() {
  var mexican = ["Taco Mamacita", "Bar Taco", "Saint Anejo"];
  var randomSelectionTacos = Math.floor(Math.random()*mexican.length);
  var randomMexican = mexican[randomSelectionTacos];
  document.querySelector("#displayResultTacos").innerHTML=randomMexican;
}

function eatBrunch() {
  var brunch = ["Pfunky Griddle", "Tavern","Walden"];
  var randomSelectionBrunch = Math.floor(Math.random()*brunch.length);
  var randomBrunch = brunch[randomSelectionBrunch];
  document.querySelector("#displayResultBrunch").innerHTML=randomBrunch;
}

function eatSushi() {
  var sushi = ["Nomzilla", "Virago", "Nama Sushi Bar", "The Diner"];
  var randomSelectionSushi = Math.floor(Math.random()*sushi.length);
  var randomSushi = sushi[randomSelectionSushi];
  document.querySelector("#displayResultSushi").innerHTML=randomSushi;
}
