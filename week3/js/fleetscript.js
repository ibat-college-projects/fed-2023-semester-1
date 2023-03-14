function init() {

    for (let i = 0; i < fleet.length; i++) {

        const currentCar = fleet[i];
        let msg = `The current car (${i}) is called ${currentCar.mf} and the colour is ${currentCar.colour}`;
        ShowMessage(msg);
    }

    ShowMessage("==========================================")

    // for....of.....loop
    // we remove the i in the statemnet

    for (const currentCar of fleet) {
        let msg = `The current car is called ${currentCar.mf} and the colour is ${currentCar.colour}`;
        ShowMessage(msg);
    }

    ShowMessage("==========================================")


    // Object destructuring...
    for (const currentCar of fleet) {

        ({ mf, model, colour } = currentCar);
        let msg = `The current car is called ${mf}, colour is ${colour}, model is ${model}`;
        ShowMessage(msg);
    }

    ShowMessage("==========================================")
    let result = findCarByMf(fleet, "Nissan");

    ShowMessage(`Search for Nissan returns: ${result}`)
}

function ShowMessage(msg) {
    document.getElementById("messages").innerHTML += msg + "<br />";
}

function findCarByMf(list, searchItem) {


    let found = false;

    for (let i = 0; i < list.length; i++) {
        const currentItem = list[i];

        if (currentItem.mf.toLowerCase() == searchItem.toLowerCase()) {
            found = true;
            break;
        }
    }

    return found;

}