// Getting all books by genre
function GetBooksByGenre(genreName) {
    $("#createBlock").css('display', 'block');
    $("#editBlock").css('display', 'none');

    $.ajax({
        url: '/api/Books/GetBooksByGenre/' + genreName,
        type: 'GET',
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (xhr, status, error) {
            alert(xhr);
        }
    });
}