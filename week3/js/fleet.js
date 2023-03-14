

// JSON data structure - JavaScript  Object Notation
// let item = { key: value, key : value, key : value, .....}

let car1 = { "mf" : "Nissan", "model" : "Navara", "engine" : "2.5", "colour" : "grey", "type" : "pickup"}
let car2 = { "mf" : "Ford", "model" : "Fiesta", "engine" : "1.4", "colour" : "pink", "type" : "sedan"}

const fleet = [car1, car2, { "mf" : "Opel", "model" : "Senator", "engine" : "1.4", "colour" : "Green", "type" : "Hatchback"}]


function init() {

document.getElementById("car1").innerHTML=`${car1.mf} - ${car1.model} ${car1.engine} ${car1.colour} ${car1.type}`;
document.getElementById("car2").innerHTML=`${car2.mf} - ${car2.model} ${car2.engine} ${car2.colour} ${car2.type}`;
   
   
document.getElementById("fleet0").innerHTML=`${fleet[0].mf} - ${fleet[0].model} ${fleet[0].engine} ${fleet[0].colour} ${fleet[0].type}`;
document.getElementById("fleet1").innerHTML=`${fleet[1].mf} - ${fleet[1].model} ${fleet[1].engine} ${fleet[1].colour} ${fleet[1].type}`;
document.getElementById("fleet2").innerHTML=`${fleet[2].mf} - ${fleet[2].model} ${fleet[2].engine} ${fleet[2].colour} ${fleet[2].type}`;


}
