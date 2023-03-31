let moment = require('moment');
let momenttimezone = require('moment-timezone');
let lodash = require('lodash');

console.log('Hello world');

let date = new moment();
console.log(moment().format('dddd'));

let targetTimezone;

momenttimezone.tz.setDefault('America/Los_Angeles');

if(process.argv.length != 3){
    console.log("Usage:  Node <script-file> <timezone>");
    process.exit(1);
}else{
    targetTimezone = process.argv[2];
}


console.log(`The time at ${targetTimezone} is ${moment().tz(targetTimezone).format()}`);