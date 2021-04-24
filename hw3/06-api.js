const url = 'https://restcountries.eu/rest/v2/all';


let getData = (url) => {
  // Add your code here
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let result = document.querySelector('#results')
      data.forEach((country) => {
        let element = document.createElement("LI");
        let words = document.createTextNode(`${country.name} - ${Number(country.population).toLocaleString("en-US")}`)
        element.append(words);
        result.append(element);
      });
    })
   .catch((error) => console.log("Error", error))

};

getData(url);
