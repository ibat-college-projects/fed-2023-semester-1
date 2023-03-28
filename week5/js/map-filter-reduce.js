var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

// What you need
//[20, 24, 56, 88]

// var officersIds = [];
// officers.forEach(function (officer) {
//     officersIds.push(officer.id);
// });

// var officersIds = officers.map(function (officer) {
//     return officer.id
//   });

const officersIds = officers.map(officer => officer.id);


var pilots2 = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

//   var totalYears = pilots.reduce(function (accumulator, pilot) {
//     return accumulator + pilot.years;
//   }, 0);

  const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);


  

