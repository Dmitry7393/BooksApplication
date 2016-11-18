(function () {
    angular.module('tabDemo', [])
	.controller('tabCtrl', ['$scope', function ($scope) {
	    /** holds tabs, we will perform repeat on this **/
	    $scope.tabs = []

	    /** Function to add a new tab **/
	    $scope.addTab = function (tabTitle, count) {
	        $scope.tabs.push({ genre: tabTitle, countBooks: count });
	        $scope.selectedTab = 0; //set the newly added tab active. 
	    }

	    /** Function to delete a tab **/
	    $scope.deleteTab = function (index) {
	        $scope.tabs.splice(index, 1); //remove the object from the array based on index
	    }

	    $scope.selectedTab = 0; //set selected tab to the 1st by default.

	    $scope.increaseNumberOfBooks = function () {
	        $scope.tabs[$scope.selectedTab].countBooks += 1;
	    }
	    $scope.decreaseNumberOfBooks = function () {
	        $scope.tabs[$scope.selectedTab].countBooks -= 1;
	    }
	    $scope.changeGenre = function (genre) {
            //decrease count of books in previous genre
	        $scope.tabs[$scope.selectedTab].countBooks -= 1;
	        //increase count of books in other genre
	        for (var i = 0; i < $scope.tabs.length; i++) {
	            if ($scope.tabs[i].genre == genre) {
	                $scope.tabs[i].countBooks += 1;
	            }
	        }

	    }

	    /** Function to set selectedTab **/
	    $scope.selectTab = function (index) {
	        var currentTab = $scope.tabs[index].genre;
	        GetBooksByGenre(currentTab);
	        $scope.selectedTab = index;
	    }
	}])
})()