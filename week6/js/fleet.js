
const APP_SETTINGS = {

    "LS_FLEET": "fleet"

}
let fleet = [];

function init() {
    console.log(` init() `)
    retrieveFromLocalStorage();

}

function retrieveFromLocalStorage() {
    fleet = JSON.parse(localStorage.getItem(APP_SETTINGS.LS_FLEET));

    // If local storage item does not exist, we initialise
    if (fleet == undefined || fleet === null) {
        fleet = [];
    }
    renderListFromObject(fleet)

}
function renderListFromObject(fleet) {

    document.getElementById("fleet").innerHTML = "";

    for (const car of fleet) {
        let row = `<tr><td>${car.mf}</td><td>${car.model}</td><td>${car.colour}</td></tr>`
        document.getElementById("fleet").innerHTML += row;

    }
}

function btnSave() {
    let mf = document.getElementById("tbMf").value;
    let model = document.getElementById("tbModel").value;
    let colour = document.getElementById("tbColour").value;

    // Create an object to store in our fleet array
    let car = {
        "mf": mf, "model": model, "colour": colour
    }

    fleet.push(car);

    //JSON.stringify(fleet) converts an object to a string
    localStorage.setItem(APP_SETTINGS.LS_FLEET, JSON.stringify(fleet));

    renderListFromObject(fleet);

}