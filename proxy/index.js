var proxy = require('redbird')({ port: 80 });

proxy.register("static.domain.com", "http://127.0.0.1:5001");
proxy.register("react.domain.com", "http://127.0.0.1:3000");

console.log("Proxy started");