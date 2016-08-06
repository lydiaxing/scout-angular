'use strict';

angular.module('matchSchedule').component('matchSchedule', {
  templateUrl: 'modules/match-schedule/match-schedule.template.html',
  controller: function matchScheduleController($http){
    var self = this;

    //TODO Bind this to the selected competition
    var event_key = "2013miket"

    var url = "http://www.thebluealliance.com/api/v2/event/" + event_key + "/matches";
    var header = { 'X-TBA-App-Id':'frc125:scoutmaster:v02' };

    $http.get(url, {headers: header}).success( function(response) {
      self.matches = response;

      self.qualMatches = {};
      self.quartfinMatches = {};
      self.semifinMatches = {};
      self.finMatches = {};

    	for(var i=0; i<self.matches.length; i++){
    		var match = self.matches[i];
    		if(match.comp_level == 'qm'){
    			self.qualMatches[i] = match;
    		}
    		else if(match.comp_level == 'qf'){
    			self.quartfinMatches[i] = match;
    		}
    		else if(match.comp_level == 'sf'){
    			self.semifinMatches[i] = match;
    		}
    		else if(match.comp_level == 'f'){
    			self.finMatches[i] = match;
    		}
      }
    });
  }
});
