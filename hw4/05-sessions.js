const express = require('express');
const session = require('express-session');
const app = express();
const parseurl = require('parseurl');
const port = process.env.PORT || 5000;

// Add your code here

// Use the express-session module
app.use(
  session({
    store: new session.MemoryStore(),
    secret: 'a secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000
    }
  })
);

app.get('/', (req, res) => {
  if(req.session.views === undefined){
    req.session.views = [];
    req.session.views.push = `\ /n`;
    res.send( `Welcome to http://localhost:${port}`);
  }
  else{
    res.write('Currently on route: /');
    res.write(`Previously visited: `);
    res.write(req.session.views.join('\n'));
    res.end();
    
  }
  });
  app.get('/:path', (req,res)=> {
    if(req.session.views === undefined) {
      req.session.views = [];
      req.session.views.push(`/${req.params.path}\n`);
      res.send(`Welcome to http://localhost:${port}`);
    }
    else{
      let ruote = parseurl(req).pathname;
      res.write(`Currently on route: ${ruote}\n`);
      res.write('Previously visited: \n');
      res.write(req.session.views.join('\n'));
      if(!req.session.views.includes(ruote)){
        req.session.views.push(ruote);
      }
    res.end(); 
    }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
