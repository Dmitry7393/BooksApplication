// Add new book
function AddBook() {
    // Getting values for new book
    var selectedGenre;
    var scope = angular.element(document.getElementById("MainWrap")).scope();
        selectedGenre = scope.tabs[scope.selectedTab].genre;
        var genreID = GetGenreID_ByName(selectedGenre);

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
            scope.$apply(function () {
                scope.increaseNumberOfBooks();
            });
            var selectedGenre = scope.tabs[scope.selectedTab].genre;
                GetBooksByGenre(selectedGenre);
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        }
    });
}