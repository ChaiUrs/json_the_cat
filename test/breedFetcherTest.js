// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null); // we expect no error for this scenario
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, desc); // compare returned description
      done();
    });
  });

  it('returns error message when invalid/non-existent breed is passed', (done) => {
    fetchBreedDescription('ShortCat', (err, desc) => {
      assert.equal(err, "Failed to find breed ShortCat");
      const expectedDesc = null;
      assert.equal(expectedDesc, desc);
      done();
    });
  });
});
