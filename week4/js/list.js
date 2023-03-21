function RenderCitySelectList(listOfCities) {

    //const selectedHtmlObject = document.getElementById("selectListOfCities");
    const selectedHtmlObject = document.querySelector("#selectListOfCities"); // # means id

    selectedHtmlObject.length = 0;

    let option = document.createElement("option");

    option.value = ""
    option.text = "Please select a city";

    selectedHtmlObject.add(option, null) // null => can be the value of the index where you want to place the item

    listOfCities.forEach((city, index) => {
        
        let option = document.createElement("option");

        option.value = index
        option.text = city;
    
        selectedHtmlObject.add(option, null) // null => can be the value of the index where you want to place the item

    });

}

function OnCityChange(element) {
   
   const currentIndex = element.selectedIndex;
   const currentValue = element.value;
   const currentText = element.options[currentIndex].text;

   RenderHtmlContent(`${currentIndex} : ${currentText} : ${currentValue}`, "cityDetail"); // remember 'select an item' is at position 0


}