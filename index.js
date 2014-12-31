var io = require('socket.io-client')('http://simple.tanpopo.cc/trafficCloud');
var Collector = require('./monitor.network.js');
var collector = new Collector();
var now = new Date() - 10000;

io.on('enter', function() {
	console.log('%d new enter', new Date());
	console.log('%d send summary', new Date());
	io.emit('summary', collector.getSummary());
});

setInterval(function() {
	io.emit('data', collector.getCurrent());
	var curr = new Date();
	if(curr > now + 10000 ) {
		now += 10000;
		console.log(collector.getCurrent());
	}
}, 1000);