/**
 * http://usejsdoc.org/
 */
const mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimt: 10,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
  });
  
var getCustomers = function(req, cb) {
	    query_limit = 10
		query_offset = 0
		pool.getConnection(function(err,con) {
			if (err) {
				cb(err,null,null);
			}	
			else {
				if (req.query.count) query_limit = req.query.count;
				if (req.query.pageno) query_offset = query_limit*(req.query.pageno-1)
				con.query("SELECT customerNumber,customerName FROM customers limit ? offset ?",
				[query_limit,query_offset], cb);
				con.release();	
			}   
	  });
};

module.exports = {
		getCustomers: getCustomers
}