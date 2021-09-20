const http = require('http');
const fs = require('fs');
const { stringify } = require('querystring');

http.createServer((request, response) => {
  // console.log('a request')
  // response.end('Hi Node') // how to understand
  const { url, method, headers } = request;
  if (url === '/' && method === 'GET') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        // Chinese Message
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8',
        })
        response.end('500 服务器睡着了')
        return
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    response.writeHead(200, { "Content-Type": "application/javascript" })
    response.end(JSON.stringify({name: "TOM"}))
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    // returns all images
    // readFile? 需要把全部图片加载到内存，因此在并发数过大的情况会出现问题
    // stream url: 1.png
    // path 
    console.log(url);
    fs.createReadStream('./' + url).pipe(response);

  }
  else {
    response.statusCode = 400
    response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.end('404 没这玩意')
  }
}).listen(3000, () => {
  console.log('Server at 3000')
})

// CORS ?? #TODO
// Audis Cookie Session

// response and request are both STREAM

/*
function getPrototypeChain(obj) {
  const protoChain = []
  while (obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj);
  }
}
*/