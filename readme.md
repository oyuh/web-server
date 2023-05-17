
# Simple Web Server

This is a simple web server to host multiple apps on one server with multiple domains and sub-domains. This is just a template that I made because all of the other options are annoying to setup, or just simply don't work.

* I would recommend using a linux server and using the [forever](https://www.npmjs.com/package/forever) npm command line tool. You can use [forever](https://www.npmjs.com/package/forever) to make sure your server and websites always stay up.




## Installation

Install the web server using the commands below.

```bash
  git clone https://github.com/oyuh/web-server server
  cd server/proxy  
```

Now edit the index.js to setup the proxies you want to connect with each domain.

```bash
  npm i redbird
```


    
## Static Site Installation

Allow the web-server to use a static site using the commands below.

```bash
  cd /server/sites
  mkdir [name-here]
  cd [name-here]
  touch index.js
```

Now edit the index.js to setup the proxies you want to connect with each domain.

```js
var http = require('http')
var fs = require('fs')

const PORT = 5001

fs.readFile('[CHANGE THIS FOR THE FILE YOU WANT LOADED]', function(error, html) {
    if (error) throw error;
    http.createServer(function(req, res) {
        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
    }).listen(PORT)
})

console.log("Static site started on port " + PORT + ".")
```
