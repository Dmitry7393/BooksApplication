//Returns genre ID
function GetGenreID_ByName(name) {
    var genreID;
    $.ajax({
        url: '/api/Genres/GetGenreID/' + name,
        type: 'GET',
        async: false,
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            genreID = data;
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        }
    });
    return genreID;
}