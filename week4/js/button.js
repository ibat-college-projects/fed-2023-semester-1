function btnAddCity() {

    const cityToAddTextObject = document.querySelector('#tbAddCity');

    const cityToAddText = cityToAddTextObject.value;

    listOfCities.push(cityToAddText);

    cityToAddTextObject.value = "";


    RenderPageOnUpdate();



}