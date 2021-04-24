const url = 'https://restcountries.eu/rest/v2/all';

let app = document.querySelector("#app");

let getData = (url) => {
  // Add your code herei
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((country) => {
        console.log('${country.name[0]}- ${country.population[0]}');
        let element = document.createElement("div");
        element.textContent = '${country.name[0]} - ${country.population[0]}';
        app.append(element);
      });
    })
   .catch((error) => console.log("Error", error))
   .finally(()=>console.log("Run no matter what"));


};

getData(url);
