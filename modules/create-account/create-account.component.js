'use strict';

angular.module('createAccount').component('createAccount', {
  templateUrl: 'modules/create-account/create-account.template.html',
  controller: function createAccountController($http){
    var self = this;

    var url = "http://localhost:5000/api/users";
    var header = { username:'blackcat', password: 'test2' };

    self.createUser = function (user) {
      console.log(user);
    };

    /**$http.post(url, {headers: header}).success( function(response) {
      console.log("Made an account successfully!")
    });**/
  }
});
