const axios = require('axios');
const cheerio = require('cheerio');
var Sentiment = require('sentiment');


const url = 'https://www.yelp.com/biz/peter-luger-brooklyn-2'

axios.get(url)
  .then(response => {
    let html = response.data;
    console.log(getData(html));
  })
  .catch(error => {
    console.log(error);
  })

let formattedData = [];
const getData = html => {
  const $ = cheerio.load(html);
  $('.review.review--with-sidebar').each((i, elem) => {
   formattedData.push({
     stars: $(elem).find('img.offscreen').attr('alt'),
     review: $(elem).find('.review-content p').html()
  })
})
 return formattedData
}

const sentiment = new Sentiment();
// const result = sentiment.analyze('Cats are stupid.');
// const result = sentiment.analyze('Dogs are amazing.');

// formattedData.forEach(function(review) {
//   review.sentiment = sentiment.analyze(review.review);
//   if (review.sentiment >= 5) {
//     review.emoji = "😃";
//   } else if (comment.sentiment > 0) {
//     review.emoji = "🙂";
//   } else if (comment.sentiment == 0) {
//     review.emoji = "😐";
//   } else {
//     review.emoji = "😕";
//   }
// });

console.log('whats the number', formattedData);
