'use strict';

angular.module('taraleriasCom40App')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
