'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: [
      function PhoneListController() {
        this.orderProp = 'age';
      }
    ]
  });
