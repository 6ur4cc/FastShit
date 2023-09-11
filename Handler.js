const http = require('http');

const Processor = require("./Processor");
const Config = require("./Config");

module.exports = http.createServer(function (req, res) {
    res.write(Processor(req.url));
    res.end();
}).listen(Config.default_port);