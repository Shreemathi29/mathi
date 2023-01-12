const os = require('os');

var totalmemory = os.totalmem();
var freeMemory = os.freemem();
var upTime = os.uptime();
var Version = os.version();



//using concatenations
console.log('Total Memory: ' +totalmemory);
console.log('Free Memory: ' +freeMemory);

//using ${} and backtick(``) character
console.log(`TotalMemory: ${totalmemory}`);
console.log(`FreeMemory: ${freeMemory}`);
console.log(`Uptime: ${upTime}`);
console.log(`Version: ${Version}`);

