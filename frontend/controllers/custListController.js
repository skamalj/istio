
var populateCustomerList = function(req, res){
	var request = require('request');
	console.log("Requesting data from customer svc " + req.query)
	request({url:'http://customer-svc:9000/getCustomers',qs:req.query}, function (error, response, body) {
      if (!error) {
		console.log("Received data from customer svc")  
		res.send(body);
	  }	
	  else {
		  console.log(error)
	  }
    });
}

var populateCustomerDetails = function(req, res){
	var request = require('request');
	request('http://customer-detail-svc:9000/getCustomerDetails/' + req.params.custid, function (error, response, body) {
      if (!error) {
		res.send(body);
	  }	
	  else {
		  console.log(error)
	  }
    });
}

module.exports = {
		populateCustomerList: populateCustomerList,
		populateCustomerDetails: populateCustomerDetails
}