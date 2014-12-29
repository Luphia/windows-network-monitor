/*
	netstat -e
	netstat -an | find "TCP" /c
	netstat -an | find "UDP" /c
 */

var clone = function(target) {
	if(typeof(target) == 'object') {
		var rs = Array.isArray(target)? []: {};
		for(var key in target) {
			rs[key] = clone(target[key]);
		}
		return rs;
	}
	else {
		return target;
	}
};

var Collector = function() {
	this.limit = 300;
	this.period = 1000;
	this.sessions = [];
	this.traffic = {
		in: [],
		out: []
	};
	
	for(var i = 0; i < limit; i++) {
		this.sessions.push(0);
		this.traffic.in.push(0);
		this.traffic.out.push(0);
	}
	
	
};

Collector.getSummary = function() {
}

module.exports = Collector;