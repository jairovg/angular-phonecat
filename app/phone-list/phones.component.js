'use strict';

angular.
  module('phoneList').
  component('phones', {
    templateUrl: 'phone-list/phones.template.html',
    bindings: {
      query: '<',
      order: '<'
    },
    controller: ['Phone',
      function PhoneController(Phone) {
        var self = this;
        Phone
            .query()
            .then(function (phones) {
              self.phones = phones;
            })
            ;
      }
    ]
  });
