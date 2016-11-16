function EditItem(el) {
    // Getting id of edited item
    var id = $(el).attr('data-item');
    GetBook(id);
}
// Get book to edit
function GetBook(id) {
    console.log("GetBook", id);
    $.ajax({
        url: '/api/Books/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            ShowBook(data);
        },
        error: function (x, y, z) {
        }
    });
}
function EditBook() {
    var id = $('#editId').val();

    var genreName = GetCurrentSelectedGenre("listGenresEditing");
    var genreID = GetGenreID_ByName(genreName);

    // получаем новые значения для редактируемой книги
    var book = {
        BookID: $('#editId').val(),
        Name: $('#editName').val(),
        Author: $('#editAuthor').val(),
        Year: $('#editYear').val(),
        Publisher: $('#editPublisher').val(),
        GenreID: genreID
    };
     $.ajax({
        url: '/api/Books/' + id,
        type: 'PUT',
        data: JSON.stringify(book),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            GetBooksByGenre(GetCurrentSelectedGenre("dropDownListGenres"));
        },
        error: function (xhr, status, error) {
            alert(xhr);
        }
    });
}