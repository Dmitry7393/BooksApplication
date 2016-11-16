// вывод полученных данных на экран
function WriteResponse(books) {
    var strResult = "<table cellpadding='2' border='1'><th>ID</th><th>Название</th><th>Автор</th><th>Год издания</th><th>Издательство</th>";
    $.each(books, function (index, book) {
        strResult += "<tr><td>" + book.BookID + "</td><td> " + book.Name + "</td><td>" +
        book.Author + "</td><td>" + book.Year + "</td><td>" + book.Publisher + "</td><td>" +
        "</td><td><a id='editItem' href='javascript:void(0);' data-item='" + book.BookID + "' onclick='EditItem(this);'>Редактировать</a></td>" +
        "<td><a id='delItem' href='javascript:void(0);' data-item='" + book.BookID + "' onclick='DeleteItem(this);' >Удалить</a></td></tr>";
    });
    strResult += "</table>";
    $("#tableBlock").html(strResult);
}