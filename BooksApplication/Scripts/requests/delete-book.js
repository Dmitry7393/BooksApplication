// обработчик удаления
function DeleteItem(el) {
    // получаем id удаляемого объекта
    var id = $(el).attr('data-item');
    DeleteBook(id);
}
// Delete book 
function DeleteBook(id) {
    var scope = angular.element(document.getElementById("MainWrap")).scope();
    $.ajax({
        url: '/api/Books/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            scope.$apply(function () {
                scope.decreaseNumberOfBooks();
            });
            var selectedGenre = scope.tabs[scope.selectedTab].genre;
            GetBooksByGenre(selectedGenre);
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        }
    });
}