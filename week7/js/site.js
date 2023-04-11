$(function () {

    setup();

});

function setup() {

    applyStriped()


    //  $('body div p').toggleClass('striped')

    $('#btnToggle').on('click', toggle)


    $('#btnHideFirst').on('click', function () {

        $('p:first').hide();

    })

    $('#btnShowFirst').on('click', function () {

        $('p:first').show();

    })

    $('#btnAppend').on('click', function () {

        for (let i = 0; i < 3; i++) {

            $(`<p>This is new item ${i}</p>`).insertAfter('p:last');
        }


    })

    $('#btnShowDate').on('click', function () {

        const currentDate = new Date();
        const shortDate = currentDate.toDateString();

        $('p')[0].innerHTML = `<em>Hello there! ${shortDate}</em>`


    })



}


function applyStriped() {

    //$(target).{action}

    $('p.second').addClass('striped');

}

function toggle() {

    $('body div p').toggleClass('striped')

}