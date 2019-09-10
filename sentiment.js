const axios = require('axios');
const cheerio = require('cheerio');
var Sentiment = require('sentiment');

let sentiment = new Sentiment();
const result = sentiment.analyze("Woweee wow! After a 'too Brooklyn for normal humans' experience at grand army ...this heavenly place was an amazing respite.  One more amazing meal like this one and I'll bump it to 5 stars.Efficient service ...stunning sushi ...and only a mildly annoying Brooklyn crowd.  Definite must go!")
// const result = sentiment.analyze('the food is deliecious here! I love it so so much.');
// const result = sentiment.analyze('this restaurant is terrible! food is disgusting! i hate it here! never coming back! bah!');
console.log('whats the result', result)
