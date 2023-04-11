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


      //  $('input:checkbox').not(this).prop('checked', this.checked)
        $('input:checkbox.meatOption').prop('checked', this.checked)

        let numberOfCheckedItems = $('input:checkbox:checked.meatOption').length;

        numberOfCheckedItems += $('input:checkbox:checked.vegOption').length;
        WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)

    })

    $('#selectVegOptions').on('click', function () {


        //  $('input:checkbox').not(this).prop('checked', this.checked)
          $('input:checkbox.vegOption').prop('checked', this.checked)
  
        //   let numberOfCheckedItems = $('input:checkbox:checked.vegOption').length;
        //   numberOfCheckedItems += $('input:checkbox:checked.meatOption').length;

          let numberOfCheckedItems = $('input:checkbox:checked.pizzaOption').length;
       
          WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)
  
      })

    $('.meatOption').on('click', function () {

        const numberOfCheckedItems = $('input:checkbox:checked').not('#selectMeatOptions').length;

        WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)

    })



}