/**
 * http://usejsdoc.org/
 */
const mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimt: 3,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
  });
  
var getCustomerOrders = function(custid, cb) {
	    var query = `select o.orderNumber, p.productName,od.priceEach, od.quantityOrdered,o.orderDate,o.status, o.shippedDate
		from orderdetails od,orders o, products p
		where od.orderNumber = o.orderNumber and od.productCode = p.productCode
		and o.customerNumber = ?`
		pool.getConnection(function(err,con) {
			if (err) {
				cb(err,null,null);
			}	
			else {
				con.query(query,custid, cb);
				con.release();	
			}   
	  });
};

module.exports = {
		getCustomerOrders: getCustomerOrders
}