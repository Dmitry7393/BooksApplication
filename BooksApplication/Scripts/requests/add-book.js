// Add new book
function AddBook() {
    // Getting values for new book
    var element = document.getElementById("listGenres");
    var genreName = element.options[element.selectedIndex].value;

    var genreID = GetGenreID_ByName(genreName);
    var book = {
        Name: $('#addName').val(),
        Author: $('#addAuthor').val(),
        Year: $('#addYear').val(),
        Publisher: $('#addPublisher').val(),
        GenreID: genreID
    };

    $.ajax({
        url: '/api/Books/',
        type: 'POST',
        data: JSON.stringify(book),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            GetBooksByGenre(GetCurrentSelectedGenre("dropDownListGenres"));
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        }
    });
}