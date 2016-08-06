'use strict';

angular.module('login').component('login', {
  templateUrl: 'modules/login/login.template.html',
  controller: function loginController($http, $location, $window){
    var self = this;

    var url = "http://localhost:5000/api/users";
    var header = { username:'cat', password: 'test2' };

    self.login = function (user) {
      console.log(user);
      $location.path('/competitions')
    };

    $http.post(url, {headers: header}).success( function(response) {
      console.log("Made an account successfully!")
    });
  }
});
