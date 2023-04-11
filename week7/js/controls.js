$(function () {

    setUpJqueryFunctions();
})

function setUpJqueryFunctions() {
    WriteWelcomeMessage();
    WriteAge();
    SetupPizzaOptions();

}

function WriteWelcomeMessage() {

    $('#btnDemo').on('click', function () {

        WriteToMessagePanel('Hello World')

    })
}

function WriteToMessagePanel(message) {

    $('#messagePanel').html(message)

}
//===============================

// Write the empty handler for btnAge - console a messaGe out

function WriteAge() {

    $('#btnAge').on('click', function () {
        // isNaN => IS NOT A NUMBER
        const number1 = isNaN($('#tbNum1').val()) ? 0 : $('#tbNum1').val();
        const number2 = isNaN($('#tbNum2').val()) ? 0 : $('#tbNum2').val();

        const total = parseInt(number1) + parseInt(number2);

        WriteToMessagePanel(total);

    })
}

function SetupPizzaOptions() {

    $('#selectMeatOptions').on('click', function () {


        $('input:checkbox').not(this).prop('checked', this.checked)

        const numberOfCheckedItems = $('input:checkbox:checked').not(this).length;

        WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)

    })

    $('.meatOption').on('click', function () {

        const numberOfCheckedItems = $('input:checkbox:checked').not('#selectMeatOptions').length;

        WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)

    })



}