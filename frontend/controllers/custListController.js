
var populateCustomerList = function(req, res){
	var request = require('request');
	var query_params = {
		count: req.query.count,
		pageno: req.query.pageno
	}
	console.log("Requesting data from customer svc " + req.query.count)
	request({url:'http://customer-svc:9000/getCustomers',qs:query_params}, function (error, response, body) {
      if (!error) {
		console.log("Received data from customer svc")  
		res.send(body);
	  }	
	  else {
		  res.send(error);
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
		  res.send(error);
		  console.log(error)
	  }
    });
}

module.exports = {
		populateCustomerList: populateCustomerList,
		populateCustomerDetails: populateCustomerDetails
}