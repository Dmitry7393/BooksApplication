// Show data of edited book
function ShowBook(book) {
    if (book != null) {
        $("#createBlock").css('display', 'none');
        $("#editBlock").css('display', 'block');

        $("#editId").val(book.BookID);
        $("#editName").val(book.Name);
        $("#editAuthor").val(book.Author);
        $("#editYear").val(book.Year);
        $("#editPublisher").val(book.Publisher);
        $("#editGenre").val(book.GenreID);
    }
    else {
        alert("Book does not exist");
    }
}