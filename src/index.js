const axios = require('axios');
const cheerio = require('cheerio');
var Sentiment = require('sentiment');


var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
// console.log('whats the number', result);

//npm install express
//npm install morgan
//npm install pg

// const url = 'https://www.yelp.com/biz/peter-luger-brooklyn-2'

// axios.get(url)
//   .then(response => {
//     let html = response.data;
//     console.log(getData(html));
//   })
//   .catch(error => {
//     console.log(error);
//   })

// let getData = html => {
//   let formattedData = [];
//   const $ = cheerio.load(html);
//   $('.review-content').each((i, elem) => {
//     formattedData.push({
//       stars: $(elem).text(),
//       review: $(elem).find('a.storylink').attr('href')
//     });

//   return $('.review-content').text()
// }

