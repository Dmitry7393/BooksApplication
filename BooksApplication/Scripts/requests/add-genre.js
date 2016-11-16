//Add item to drop down list
function addGenreToDropDownList(selectList,genreName) {
    var listGenres = document.getElementById(selectList);
    var opt = document.createElement("option");
    opt.text = genreName;
    listGenres.add(opt, null); 
}
window.addEventListener("load", function (_) {
    $('#dropDownListGenres').change(function () {
        var val = $("#dropDownListGenres option:selected").text();
        GetBooksByGenre(val);
    });
    $('#btnAddGenre').click(function () {
        var genre = document.getElementById('textBoxGenre').value;
        var dataJSON = { Name: genre };
        var listGenres = document.getElementById("listGenres");
        var opt = document.createElement("option");
        opt.text = genre;
        listGenres.add(opt, null);
        $.ajax({
            url: '/api/Genres/',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
        });
    });
});
