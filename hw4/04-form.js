const static = require('node-static');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const file = new static.Server('./public');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.json());

app.get('/',(req, res)=> {
  file.serve(req,res);
});

app.post('submit', (req,res)=>{
  

});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
