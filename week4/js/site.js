function init() {
    message("init()")
    let htmlFragment = RenderCitiesAsHTML(getListOfCities());

    RenderHtmlContent(htmlFragment, "listOfItems");

}

function getListOfCities() {
    message("getListOfCities()")
    const cities = ['Dublin', 'Cork', 'Limerick', 'Killarney','Belfast','Galway'];

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