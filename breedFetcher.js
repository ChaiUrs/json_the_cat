
const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  
  let err;
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
    // console.log(body);
    // console.log(typeof body);

    if (error) {
      err = (`${name} Not Found!`);
      callback(err, "");
    }
    const data = JSON.parse(body);
    // console.log(data);

    const breed = data[0];
    if (breed) {
      callback(err, breed.description);
    } else {
      callback(`${breedName} Not Found`, err);
    }
  });

};

// fetchBreedDescription(args[0]);

module.exports = { fetchBreedDescription };
