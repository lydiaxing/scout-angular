'use strict';

angular.module('competitions').component('competitions', {
  templateUrl: 'modules/competitions/competitions.template.html',
  controller: function competitionsController($http){
    var self = this;

    var d = new Date();
    var n = d.getFullYear();

    var url = "http://www.thebluealliance.com/api/v2/events/" + n;
    var header = { 'X-TBA-App-Id':'frc125:scoutmaster:v02' };

    // TODO get the team competitions!
    self.teamCompetitions = [{ 'name': 'Team Competition'}, {'name': 'Another Team Competition'}];

    $http.get(url, {headers: header}).success( function(response) {
      self.competitions = response;
    });
  }
});
