let movieListing = [];

//Load everything after document as loaded
$(function () {

    init();
});

//Do you setups here 
function init() {

    SetupMovieLoader();
}

function SetupMovieLoader() {

    $('#btnLoadMovies').on('click', function () {

        console.log('movie loader');
        const url = 'http://localhost:3000/movies';

        // async method
        $.getJSON(url, function (moviedata) {

            console.log(moviedata);

            RenderMovieDataAsTable(moviedata)

        });

        // note this call will typically appear before your movie data which is loading in the background
        console.log('I am after the movie json call');
    })

}


function RenderMovieDataAsTable(moviedata) {

    console.log({ moviedata });


    movieListing = moviedata;
    let htmlString = [];
    for (const movie of movieListing) {

        const { title, year, director, id, cast, ...rest } = movie;

        // console.log(`The title of the movie is ${title} and director is ${director} `)
        const btnDetails = `<button class='btn btn-success' onclick="GetMovieDetail(${id})">Details</button>`
        htmlString.push(`<tr>`)
        htmlString.push(`<td>${title}</td> `)
        htmlString.push(`<td>${year}</td>`)
        htmlString.push(`<td>${btnDetails}</td>`)

        htmlString.push(`</tr>`)

    }

    $('tbody#movieBody').append(htmlString.join(''))

}

function GetMovieDetail(id) {

    console.log(`Movie id search for ${id}`)

    const movieItem = movieListing.find(x => x.id == id);

    console.log({ movieItem });

    RenderMovieItem(movieItem)

}

function RenderMovieItem(movie) {

    const { title, year, director, id, cast, ...rest } = movie;

    castList = cast.split(',');

    console.log({ castList })
    let htmlString = [];
    htmlString.push(`<ol>`)
    for (const member of castList) {

        htmlString.push(`<li>${member}</li>`)

    }
    htmlString.push(`</ol>`)

    $('#castList').append(htmlString.join(''))

 


}