'use strict';
var myApp = angular.module('MyApp', []);
myApp.controller('MainController', ['$scope', function ($scope) {

  $scope.submitForm = function () {
    var person = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.userEmail,
      birthPlace: $scope.birthPlace,
      phoneNumber: '(' + $scope.phoneNumber.slice(0, 3) + ') ' + $scope.phoneNumber.slice(3),
      favFood: $scope.userFavFood,
      bio: $scope.userBio
    }
    $scope.people.push(person);
    form.reset();
  }
  $scope.test = function () {
    if ($scope.phoneNumber) 
      return /\D/.test($scope.phoneNumber);
  };
  $scope.warn = "We don't discrimitate but... no special characters, spaces or letters allowed."
  $scope.people = [];
}]);