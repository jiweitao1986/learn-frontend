var format = require('date-fns/format');
var parseISO = require('date-fns/parseISO');


// var dateObj = new Date('2020-02-13');
var dateObj = parseISO('2020-02-13');


var dateString = format(dateObj, `yyyy-MM-dd'T'HH:mm:ssxxx`);
console.log(dateString);