var pilots = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels",
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire",
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire",
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels",
    }
];

//   var rebels = pilots.filter(function (pilot) {
//     return pilot.faction === "Rebels";
//   });
//   var empire = pilots.filter(function (pilot) {
//     return pilot.faction === "Empire";
//   });

const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");




var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

var jediPersonnel = personnel.filter(person => person.isForceUser == true)

var jediScores = jediPersonnel.map(jedi => jedi.pilotingScore + jedi.shootingScore)

var totalJediScore = jediScores.reduce((acc, score) => acc + score);

console.log(jediPersonnel);
console.log(jediScores);
console.log(totalJediScore);

var totalJediScore2 = personnel.filter(person => person.isForceUser == true)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score);

    console.log(totalJediScore2);

