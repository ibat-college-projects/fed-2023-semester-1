let counter = 0;
let counterMaxLimit = 5;
let counterMinLimit = 0;

function btnAdd() {

    // counter++;

    // if (counter > counterMaxLimit) counter = 5;

    counter = ++counter <= counterMaxLimit ? counter : counterMaxLimit; //ternary expression


    WriteCounter(counter);

}
function btnMinus() {

    // counter--;

    // if (counter < counterMinLimit) counter = 0;

    counter = --counter >= counterMinLimit ? counter : counterMinLimit;

    WriteCounter(counter);
}
function btnReset() {
    WriteCounter(0);
}

function WriteCounter(num) {

    document.getElementById("counterResult").innerHTML = num;
}