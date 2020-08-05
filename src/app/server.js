var http = require('http'),
  httpProxy = require('http-proxy');

var enableCors = function(req, res) {
  if (req.headers['access-control-request-method']) {
    res.setHeader('access-control-allow-methods', req.headers['access-control-request-method']);
  }

  if (req.headers['access-control-request-headers']) {
    res.setHeader('access-control-allow-headers', req.headers['access-control-request-headers']);
  }

  if (req.headers.origin) {
    res.setHeader('access-control-allow-origin', req.headers.origin);
    res.setHeader('access-control-allow-credentials', 'true');
  }
};

export default function startProxy(msg) {
  var proxy = httpProxy.createProxyServer({});

  // set header for CORS
  proxy.on("proxyRes", function(proxyRes, req, res) {
    // console.log('-------------->', proxyRes);
    enableCors(req, res);
  });

  proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('x-userid', 'dsin');
  });

  var server = http.createServer(function(req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.

    // target: 'http://vl-basenutv01:8080'
    proxy.web(req, res, {
      target: 'http://vl-basenutv01:8080'
    });
  });

  console.log("listening on port 3000")
  server.listen(3000);

  return proxy;
}
