let listOfCities = getListOfCities();

function init() {
    message("init()")
    RenderPageOnUpdate()
}

function RenderPageOnUpdate() {
   

    let htmlFragment = RenderCitiesAsHTML(listOfCities);

    RenderHtmlContent(htmlFragment, "listOfItems");

    htmlFragment = RenderCitiesAsHTMLWithIndex(listOfCities)

    RenderHtmlContent(htmlFragment, "listOfItemsWithIndex");

    RenderCitySelectList(listOfCities)

}

function renderCity(cityIndex) {

    let listOfCities = getListOfCities();

    let html = `${listOfCities[cityIndex]} : ${cityIndex}`;

    RenderHtmlContent(html, "cityDetail");

}


function RenderCitiesAsHTMLWithIndex(listOfCities) {
    message("RenderCitiesAsHTML()")

    let htmlContent = [];

    htmlContent.push("<ol>");

    // for (const city of listOfCities) {
    //     htmlContent.push(`<li>${city}</li>`);

    // }

    listOfCities.forEach((city, index) => {

        let button = `<button onclick="renderCity(${index})">Render City</button>`;

        htmlContent.push(`<li>${city} ${button}</li>`);
    });


    htmlContent.push("</ol>");

    return htmlContent.join('');

}

function getListOfCities() {
    message("getListOfCities()")
    const cities = ['Dublin', 'Cork', 'Limerick', 'Killarney',
        'Belfast', 'Galway'];

    return cities;


}

function message(msg) {
    console.log(msg);
}



function RenderCitiesAsHTML(listOfCities) {
    message("RenderCitiesAsHTML()")

    let htmlContent = [];

    htmlContent.push("<ol>");

    for (const city of listOfCities) {
        htmlContent.push(`<li>${city}</li>`);

    }

    htmlContent.push("</ol>");


    return htmlContent.join('');



}


function RenderHtmlContent(htmlContent, elementId) {

    message("RenderHtmlContent()")

    const selectedObject = document.getElementById(elementId);
    selectedObject.innerHTML = htmlContent;

}