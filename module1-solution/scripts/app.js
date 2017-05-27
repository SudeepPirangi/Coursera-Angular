(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.checkFunction = function(){
      var menu = $scope.menu;
      if ( menu == undefined ) {
        $scope.message = 'Please enter data first';
        $scope.status = 'red';
      } else {
        menu = menu.trim();
        if ( menu.length == 0 ) {
          $scope.message = 'Please enter data first';
          $scope.status = 'red';
        } else {
          var rawItems = menu.split(',');
          var menuItems = [];
          for (var i=0; i<rawItems.length; i++){
            var thisItem = rawItems[i].trim();
            if (thisItem.length != 0) {
              menuItems.push(thisItem);
            }
          }
          if (menuItems.length <= 3) {
            $scope.message = 'Enjoy!';
            $scope.status = 'green';
          } else {
            $scope.message = 'Too much';
            $scope.status = 'green';
          }
        }
      }
    }
  };

})();
