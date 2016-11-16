// обработчик удаления
function DeleteItem(el) {
    // получаем id удаляемого объекта
    var id = $(el).attr('data-item');
    DeleteBook(id);
}
// Delete book 
function DeleteBook(id) {
    $.ajax({
        url: '/api/Books/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            GetBooksByGenre(GetCurrentSelectedGenre("dropDownListGenres"));
        },
        error: function (xhr, status, error) {
            alert(xhr);
        }
    });
}