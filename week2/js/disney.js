// "Sleepy"
// "Dopey"
// "Sneezy"
// "Grumpy"
// "Happy"
// "Bashful"
// "Doc"


// Create a FUNCTION which outputs the LIST of dwarves
// and shows how many dwarves there are
// it should set up some dwarves at the beginning
// then ADD more
// REMOVE some, put them back and show the count
// call it DisneyDwarves()

function initDwarves() {
    let dwarves = [
        "Sleepy",
        "Dopey",
        "Sneezy"
    ]

    return dwarves;
}

function listDwarves(dwarves) {
    for (let i = 0; i < dwarves.length; i++) {
        console.log(`The dwarf at position ${i} is ${dwarves[i]}`)
    }

}

function DisplayDisneyDwarves() {

    let dwarves = initDwarves();

    dwarves.push("Grumpy");
    dwarves.push("Happy");

    dwarves.unshift("Bashful");
    dwarves.unshift("Doc");
    dwarves.push("Doc"); // add to the end

    let poppedDwarf = dwarves.pop();

    console.log(`The poppedDwarf  is ${poppedDwarf}`)

    listDwarves(dwarves)

    SendDwarvesHome(dwarves)


}

function SendDwarvesHome(dwarves) {

    console.log(`There are ${dwarves.length} queing to get home`);

    while(dwarves.length > 0 ) {
        let dwarf = dwarves.pop();
        GetBus(dwarf)
        console.log(`There are now ${dwarves.length} queing to get home`);
    }

    console.log(`Everybody is home`);


}

function GetBus(dwarf) {

    console.log(`${dwarf} has caught the bus home`)

}

DisplayDisneyDwarves();
