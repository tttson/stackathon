const axios = require('axios');
const cheerio = require('cheerio');
var Sentiment = require('sentiment');

const url = 'https://www.yelp.com/biz/hibino-brooklyn?osq=sushi'

async function getRawHTML () {
  try {
    let formattedData = []
    let response = await axios.get(url)
    let html = response.data;
    const $ = await cheerio.load(html)
   $('.review.review--with-sidebar').each((i, elem) => {
      formattedData.push({
        stars: $(elem).find('img.offscreen').attr('alt'),
        review: $(elem).find('.review-content p').html()
      })
    })
    return formattedData
  } catch (err) {
    console.log(err);
  }
}

getRawHTML().then((data) => {data.forEach(obj => {
    obj.score = 0
  })
  console.log('madeithere', data)
})


// let sentiment = new Sentiment();
// const result = sentiment.analyze('Cats are stupid.');
// const result = sentiment.analyze('this restaurant is terrible! food is disgusting! i hate it here! never coming back! bah!');
// console.log('whats the result', result)

//need to analyze each review and set a key called score so that you can include it in the table
// let test = formattedData.map(function(eachReview) {
//   eachReview.score = sentiment.analyze(eachReview.review)
// });


// let formattedData
// axios.get(url)
//   .then(response => {
//     formattedData = [];
//     let html = response.data;
//     const $ = cheerio.load(html);
//   // console.log('am i getting here')
//    $('.review.review--with-sidebar').each((i, elem) => {
//    formattedData.push({
//      stars: $(elem).find('img.offscreen').attr('alt'),
//      review: $(elem).find('.review-content p').html()
//     })
//   console.log('this one', formattedData)
// })
//   })
//   .catch(error => {
//     console.log(error);
//   })

// let formattedData = [];
// const getData = html => {
//   const $ = cheerio.load(html);
//   console.log('am i getting here')
//   $('.review.review--with-sidebar').each((i, elem) => {
//    formattedData.push({
//      stars: $(elem).find('img.offscreen').attr('alt'),
//      review: $(elem).find('.review-content p').html()
//   })
// })
//  return formattedData
// }

// let sentiment = new Sentiment();
// const result = sentiment.analyze('Cats are stupid.');
// const result = sentiment.analyze('this restaurant is terrible! food is disgusting! i hate it here! never coming back! bah!');
// console.log('whats the result', result)

//need to analyze each review and set a key called score so that you can include it in the table
// let test = formattedData.map(function(eachReview) {
//   eachReview.score = sentiment.analyze(eachReview.review)
// });


// console.log('wheres the score', formattedData);
