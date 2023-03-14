function init() {

    console.log("I am the init function");


    WriteParagraph("Week 3 Greeting from a function");

    WriteDate();



}

function WriteDate() {

    let currentDate = new Date();
    const longDate = currentDate.toString();



    let element = document.getElementById("CurrentDate");

    let message = `${longDate}`

    element.innerHTML=message;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = currentDate.getDay();
    const month= currentDate.getMonth();
    const year = currentDate.getFullYear();
    const currentMonthDate = currentDate.getDate();

    const withSlashes = [year, month+1, currentMonthDate     ];
    
    document.getElementById("dateInMonth").innerHTML=currentMonthDate;
    document.getElementById("dateDay").innerHTML=days[day];
    document.getElementById("dateMonth").innerHTML=months[month];
    document.getElementById("dateYear").innerHTML=year;
    document.getElementById("dateWithSlashes").innerHTML=withSlashes.join('/');

}

function WriteParagraph(message) {

    // document.getElementById("greetingParagraph").innerHTML = "Week 3 Greeting";

    let element = document.getElementById("greetingParagraph");

    element.innerHTML = message;


}





