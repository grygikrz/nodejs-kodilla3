var os = require('os');
var TimeConv = require('./timecon');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = TimeConv.conv(os.uptime());
    var userInfo = os.userInfo();
    console.log('System:'.grey, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.magenta, cpu);
    console.log('Uptime: ~'.green, uptime);
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.gray, userInfo.homedir);
}

exports.print = getOSinfo;
