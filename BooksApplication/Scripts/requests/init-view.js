
//Init drop down list with genres
function setDataInTabs() {
    var scope = angular.element(document.getElementById("MainWrap")).scope();
    scope.tabs = [];
    $.ajax({
        url: '/api/genres',
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function (data) {
            $.each(data, function (index, genre) {
                addGenreToDropDownList("listGenresEditing", genre.Name);

                //Create tabs with angular
                scope.$apply(function () {
                    scope.addTab(genre.Name, getCountBooksInTab(genre.Name));
                });
            });
        },
        error: function (xhr, status, error) {
            console.log("Error getting data ");
        }
    });
  
    //Show data first genre
    if (scope.tabs.length > 0)
        GetBooksByGenre(scope.tabs[0].genre);
}
function getCountBooksInTab(genre) {
    var count;
    $.ajax({
        url: '/api/Books/GetCountOfBooks/' + genre,
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function (data) {
            count = data;
        },
        error: function (xhr, status, error) {
            console.log("Error getting count of books ");
        }
    });
    return count;
}
window.addEventListener("load", function (e) {
    setDataInTabs();
    
    $("#editBook").click(function (event) {
        event.preventDefault();
        EditBook();
    });
});