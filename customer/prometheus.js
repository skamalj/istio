const Prometheus = require('prom-client')

const total_requests = new Prometheus.Counter({
    name: 'custsvc_total_requests',
    help: 'Total requests to submit',
    labelNames: ['target']
});

const response_time = new Prometheus.Gauge({
    name: 'custsvc_response_time',
    help: 'Response Time',
    labelNames: ['target']
});

module.exports = {
    Prometheus: Prometheus,
    total_requests: total_requests,
    response_time: response_time
}