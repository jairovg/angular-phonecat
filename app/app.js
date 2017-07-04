// Load vendors first
require('angular');
require('angular-animate');
require('angular-resource');
require('angular-route');

// Require all the .html files
//@require "./**/!(index).html"
require('./app.module');
require('./app.config');
require('./app.animations');
require('./core/core.module');
require('./core/checkmark/checkmark.filter');
require('./phone-list/phone-list.module');
require('./phone-list/phone-list.component');
require('./phone-list/phones.component');
require('./phone-list/phone.component');
require('./phone-detail/phone-detail.module');
require('./phone-detail/phone-detail.component');