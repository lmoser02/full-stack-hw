const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// http://localhost:5000/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5000/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// for other routes, such as http://localhost:5000/other, this exercise should return a status code 404 with '404 - page not found' in html format

const routes = [
  'welcome',
  'redirect',
  'redirected',
  'cache',
  'cookie',
  'other',
];

let getRoutes = () => {
  let result = '';

  routes.forEach(
    (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
  );

  return result;
};

app.get('/', (req, res) => {
  let routeResults = getRoutes();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Exercise 04</h1>`);
  res.write(`<ul> ${routeResults} </ul>`);
  res.end();
});

app.get('/welcome', (req, res) => {});

// Add your code here

app.get('/redirect',(req, res) => { 
  res.writeHead(302, {Location: "/redirected"});
    res.end();
});

app.get('/redirected',(req, res) => { 
  res.status(302);
  res.set({'Content-Type': 'text/html'});
  res.write('<h1>You have been being redirected</h1>');
  res.end();
});

app.get('/cache',(req, res) => { 
  res.setHeader('Cache-control','Max-Age=86400');
    res.write('<h1>This resource has been cached</h1>');
    res.end();
});

app.get('/cookie',(req, res) => { 
  res.setHeader('Set-Cookie','hello=world');
    res.write('<h1>Cookies....yummmmm</h1>');
    res.end();
});

app.get('/check-cookies',(req, res) => { 
  res.writeHead(200, {"Content-Type": 'text/html'});
    let result = 'No';
    if(req.headers.cookie === 'hello=world'){
      result = 'Yes';
    }
    res.write(`Presence of hello=world cookie on site: ${result}`);
    res.end();
});
  
  app.use((req, res) => { 
    res.status(400);
    res.set({'Content-Type': 'text/html'});
    res.send('<h1>404: Page not found</h1>');
    res.end();
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
