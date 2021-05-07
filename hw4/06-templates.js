const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 5000;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.eu/rest/v2/all';

// Add your code here

app.get('/', (req, res) => {
  // render pug template for the index.html file

  results = [
    'Countries and Capitals',
    'Most Populous Countries',
    'Regions of the World',
  ];

  res.render('page', {
    heading: 'Countries of the World',
    results: results,
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  //results = ['Afghanistan', 'Aland Islands', 'Albania'];
  //need to put results in the form needed for printing

  //const c_url = 'https://restcountries.eu/rest/v2/capital/tallinn';
  const url = 'https://restcountries.eu/rest/v2/all';

  fetch(url,{Method: 'Get'})
  .then((response)=> response.json())
  .then((data) => {
    console.log(data);
    let results = [];
    data.forEach((country) => {
      let element = document.createElement("li");
      let words = document.createElement(`${country.name} - ${country.capital}`);
      element.append(words);
      results.append(element);
    });
  })
  .catch((error) => console.log("Error", error))
  
  res.render('page', {
    heading: 'Countries and Capitals',
    results: results,
  });
  
});

app.get('/populous', (req, res) => {
  // filter the output array for the countries with population of 5ß0 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  results = ['China', 'India', 'United States of America'];
  

  res.render('page', {
    heading: 'Most Populous Countries',
    results: results,
  });
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  results = ['Asia - 50', 'Europe - 53', 'Africa - 60'];

  res.render('page', {
    heading: 'Regions of the World',
    results: results,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
