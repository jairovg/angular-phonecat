'use strict';

angular.
  module('phoneList').
  component('phone', {
    templateUrl: 'phone-list/phone.template.html',
    bindings: {
      id: '<',
      imageUrl: '<',
      name: '<',
      snippet: '<'
    },
    controllerAs: 'phoneCtrl',
    controller: [
      function PhoneController() {
      }
    ]
  });
