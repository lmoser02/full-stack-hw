const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 5000;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.eu/rest/v2/all';

// Add your code hereA
app.use(express.static('/public'));

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

  const url = 'https://restcountries.eu/rest/v2/all';

  fetch(url,{Method: 'Get'})
  .then((response)=> response.json())
  .then((data) => {
    let results = [];
    data.forEach((country) => {
     const grab = {"name":country.name, "capital": country.capital}
     console.log(grab.name, grab.capital);
     results.push(`${grab.name} - ${grab.capital}`);
    });

    res.render('page', {
      heading: 'Countries and Capitals',
      results: results,
    });

  })
  .catch((error) => console.log("There was an error loading page", error))
});

app.get('/populous', (req, res) => {
  // filter the output array for the countries with population of 5ß0 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  //results = ['China', 'India', 'United States of America'];
  

  fetch(url,{Method: 'Get'})
  .then((response)=> response.json())
  .then((data) => {
    let results = [];
    data.sort((x, y) => {
      return y.population - x.population;
    });
    data.forEach((country) => {
     if(country.population > 50000000){
      const grab = {"name":country.name, "population": country.population}
      console.log(grab.name, grab.population);
      results.push(`${grab.name} - ${Number(grab.population).toLocaleString("en-US")}`);
     }
    });
    res.render('page', {
      heading: 'Most Populous Countries',
      results: results,
    });
  })
  .catch((error) => console.log("There was an error loading page", error))
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  //results = ['Asia - 50', 'Europe - 53', 'Africa - 60'];

  fetch(url,{Method: 'Get'})
  .then((response)=> response.json())
  .then((data) => {
    let results = [];
    let region_results = [];
    data.forEach((country) => {
     if(country.region != ''){
       if(region_results[country.region] != null){
         region_results[country.region] +=1;
       
       }
       else{
         region_results[country.region] = 1;
       }
     }
    });
    const amount = Object.keys(region_results);
    for(let i = 0; i < amount.length; i++){
      results.push(`${amount[i]}- ${region_results[amount[i]]}`)
    }
    res.render('page', {
      heading: 'Regions of the World',
      results: results,
    });
  })
  .catch((error) => console.log("There was an error loading page.", error))
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
