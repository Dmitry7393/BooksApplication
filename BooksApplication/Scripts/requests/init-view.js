//Init drop down list with genres
window.addEventListener("load", function (e) {
    $.ajax({
        url: '/api/genres',
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function (data) {
            $.each(data, function (index, genre) {
                addGenreToDropDownList("dropDownListGenres", genre.Name);
                addGenreToDropDownList("listGenresEditing", genre.Name);
                addGenreToDropDownList("listGenres", genre.Name);
            });
        },
        error: function (xhr, status, error) {
            alert("Error getting data ");
        }
    });
  

    GetBooksByGenre(GetCurrentSelectedGenre("dropDownListGenres"));

    $("#editBook").click(function (event) {
        event.preventDefault();
        EditBook();
    });
});