//Callback function to route - /getScrips
var users = require('../models/customer.js');
const prometheus = require('../prometheus.js');

var getCustomers = function(req, res){
	target = req.url;
	users.getCustomers(function(err, data, fields) {
		if (err){
			console.log(err);
			res.status(500);
			res.send("Backend query failed - check console logs");
		}
		else {
			var randomDelay = randomInt(0, 1)
			for (let delay = 0; delay < Math.pow(10,randomDelay); delay++) {}
			res.send(data);
			if (!target.includes('metric')) {
				prometheus.total_requests.inc({ target });
			}	
		}
	 })
};

function randomInt(low, high) {
	return Math.floor(Math.random() * (high - low) + low)
}
module.exports = {
		getCustomers: getCustomers
}