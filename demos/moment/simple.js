var moment = require('moment');

const momentObj = moment('2020-02-13');
var dateString = momentObj.format();

console.log(momentObj.constructor.name);
console.log(dateString);