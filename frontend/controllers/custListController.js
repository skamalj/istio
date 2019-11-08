
var populateCustomerList = function(req, res){
	var request = require('request');
	var query_params = {
		count: req.query.count,
		pageno: req.query.pageno
	}
	console.log("Requesting data from customer svc for count " + req.query.count + " and page " + req.query.pageno)
	request({url:'http://istio.wiprogcn.com/getCustomers',qs:query_params}, function (error, response, body) {
      if (!error) { 
		res.send(body);
	  }	
	  else {
		  res.send("Could not fetch data from customer service");
		  console.log(error)
	  }
    });
}

var populateCustomerDetails = function(req, res){
	var request = require('request');
	console.log("Getting details for "+req.params.custid);
	request('http://istio.wiprogcn.com/getCustomerDetails/' + req.params.custid, function (error, response, body) {
      if (!error) {
		res.send(body);
	  }	
	  else {
		  res.send("Could not fetch data from customer detail service");
		  console.log(error)
	  }
    });
}

module.exports = {
		populateCustomerList: populateCustomerList,
		populateCustomerDetails: populateCustomerDetails
}