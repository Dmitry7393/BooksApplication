//Add item to drop down list
function addGenreToDropDownList(selectList,genreName) {
    var listGenres = document.getElementById(selectList);
    var opt = document.createElement("option");
    opt.text = genreName;
    listGenres.add(opt, null); 
}
window.addEventListener("load", function (e) {
    $('#btnAddGenre').click(function () {
        var genre = document.getElementById('textBoxGenre').value;
        var dataJSON = { Name: genre };
        $.ajax({
            url: '/api/Genres/',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                //update tabs               
                setDataInTabs();
            }
        });
    });
});
