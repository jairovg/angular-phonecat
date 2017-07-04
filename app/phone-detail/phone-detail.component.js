'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        Phone
            .get($routeParams.phoneId)
            .then(function(phone) {
              self.phone = phone;
              self.setImage(phone.images[0]);
            })
            ;
      }
    ]
  });
