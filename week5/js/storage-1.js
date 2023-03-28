/* https://bit.ly/40K9C4z */
const APP_SETTINGS = {
    "FAVOURITE_FLAVOUR_KEY": "FavouriteFlavour",
    "FAVOURITE_FLAVOUR_TB_ID": "tbFlavour",
    "FAVOURITE_FLAVOUR_LOADED": "FavouriteFlavourLoaded",
}
function init() {
    console.log(` init() `)
}

function btnSave() {

    let favouriteFlavour = document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_TB_ID).value;

    localStorage.setItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY, favouriteFlavour)

}

function btnRetrieveFlavour() {

    const favouriteFlavour = localStorage.getItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY);

    document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_LOADED).innerHTML = favouriteFlavour;
}

function btnDeleteFlavour() {

    localStorage.removeItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY);
    document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_LOADED).innerHTML = "";

}