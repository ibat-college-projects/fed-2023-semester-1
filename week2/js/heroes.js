let firstNames = ["Bruce", "Peter", "Clarke"];

console.log(`The first superhero is ${firstNames[0]}`)
console.log(`The second superhero is ${firstNames[1]}`)
console.log(`The third superhero is ${firstNames[2]}`)
console.log(`The total number of heroes is ${firstNames.length}`)

let firstNamesCount = firstNames.length;
// for(let counter = 0; counter < firstNamesCount; counter++) {

//     console.log(`The firstname at position ${counter} is  ${firstNames[counter]}`)
// }

function ListSuperHeroes(superHeroes) {
    let count = superHeroes.length;
    for (let i = 0; i < count; i++) {

        console.log(`The superhero at position ${i} is  ${superHeroes[i]}`)
    }
}

let DC_SuperHeroes  = ["Batman","Superman","Wonder Woman"]
let MARVEL__SuperHeroes = ["Spiderman","The Hulk", "Doctor Strange"]

// Push adds an element on to the end of an array
DC_SuperHeroes.push("Aquaman")
DC_SuperHeroes.push("Green Lantern")

//Unshift places an element at the start of the list
DC_SuperHeroes.unshift("The Flash") // put at the start of the array

MARVEL__SuperHeroes.push("Jessica Jones")
MARVEL__SuperHeroes.push("Deadpool")
MARVEL__SuperHeroes.unshift("Wolverine")


ListSuperHeroes(DC_SuperHeroes);
console.log("======================================")
ListSuperHeroes(MARVEL__SuperHeroes);
console.log("======================================")

let lastHeroInList = DC_SuperHeroes.pop()
console.log("======================================")
console.log(`${lastHeroInList} got popped`)
console.log("======================================")
ListSuperHeroes(DC_SuperHeroes);

//Shift removes an element at the start
let firstHeroInList = MARVEL__SuperHeroes.shift()
console.log("======================================")
console.log(`${firstHeroInList} got removed from the start`)
console.log("======================================")
ListSuperHeroes(MARVEL__SuperHeroes);
