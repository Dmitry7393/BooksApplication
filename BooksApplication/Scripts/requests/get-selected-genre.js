function GetCurrentSelectedGenre(selectList) {
    //Get the name of the currently selected genre
    var elementList = document.getElementById(selectList);
    var genreName = elementList.options[elementList.selectedIndex].value;

    return genreName;
}