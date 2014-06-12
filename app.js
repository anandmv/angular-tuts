/*Written By Anand MV
* On: 7 June 2014 1:00am
*/
var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
//intialise name variable	
  $scope.name = "Anand";
  $scope.email = "anand.mv2@gmail.com";

  $scope.myChoice = 3;
  $scope.options = [
    { name: 'one', value: 1},
    { name: 'two', value: 2},
    { name: 'three', value: 3},
    { name: 'four', value: 4}];
});

//custom directive
app.directive('sampleDirective', function() {
  return {
      restrict: 'AE',//A- atribute,E-element
      template: '<h3>My new directive--{{name}}</h3>'
  };
});

//custom directive
app.directive('userInfo', function() {
  return {
      restrict: 'AE',//A- atribute,E-element
      templateUrl: 'userInfo.html'//template file name
  };
});