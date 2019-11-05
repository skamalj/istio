//Defines routes for the application linked to controllers/callback functions

const userlistctrl = require('../controllers/listcustomers.js');
const prometheus = require('../prometheus.js');
var responseTime = require('response-time')

module.exports = function(app){

app.use(responseTime(function (req, res, time) {
	target = req.url;
	if (!target.includes('metric')) {
		prometheus.response_time.labels(target).set(time);
	}	
}));

app.get('/getCustomers', userlistctrl.getCustomers);

app.get('/metrics', (req, res) => {
	res.set('Content-Type', prometheus.Prometheus.register.contentType)
	res.end(prometheus.Prometheus.register.metrics())
  });

// 404 
app.use(function(req, res, next) {
	res.status(404);
	res.send('<h1>404 - Not Found</h1>')
});
// 500 
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.send('<h1>500 - Server Error</h1>')
});

}