// const axios = require('axios');
// const cheerio = require('cheerio');
// const Nightmare = require('nightmare')
const yelp = require('yelp-fusion');

const client = yelp.client('RFjX6wL0YbJSDHpkizRDX-M7eH4eqQH8qr1PSyugkS1y4Fxw4CqJ3SvC5PnmT6RPGCYsryQmIZmamkVUE6BTaOFq2ZK7ftc2QQLlIyaDrJYf2ybeBjtvyTvSJGx3XXYx');

export const myreviews = client.reviews('peter-luger-brooklyn-2').then(response => {
  console.log(response.body)
  return response.body
}).catch(e => {
  console.log(e);
});


/////////********/THIS USED TO WORK FOR STATIC PAGES/**********////////////
// const url = 'https://www.yelp.com/biz/hibino-brooklyn?osq=sushi'
// async function getRawHTML () {
//   try {
//     let formattedData = []
//     let response = await axios.get(url)
//     let html = response.data;
//     const $ = await cheerio.load(html)
//    $('.review.review--with-sidebar').each((i, elem) => {
//       formattedData.push({
//         stars: $(elem).find('img.offscreen').attr('alt'),
//         review: $(elem).find('.review-content p').html()
//       })
//     })
//     return formattedData
//   } catch (err) {
//     console.log(err);
//   }
// }
// getRawHTML().then((data) => {data.forEach(obj => {
//     obj.score = 0
//   })
//   console.log('madeithere', data)
// })


/////////********/THIS WORKS/**********////////////
// const url = 'https://news.ycombinator.com/'
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
//   $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
//     formattedData.push({
//       title: $(elem).text(),
//       link: $(elem).find('a.storylink').attr('href')
//     });
//   });
//   return formattedData;
// }
/////////****/WORK IN PROGRESS****//////////

// const url = 'https://www.yelp.com/biz/hibino-brooklyn?osq=sushi'
// async function getRawHTML () {
//   try {
//     let formattedData = []
//     let response = await axios.get(url)
//     let html = response.data;
//     const $ = await cheerio.load(html)
//    $('.lemon--div__373c0__1mboc spinner-container__373c0__N6Hff border-color--default__373c0__2oFDT').each((i, elem) => {
//       formattedData.push({
//         review: $(elem).find('.lemon--p__373c0__3Qnnj text__373c0__2pB8f comment__373c0__3EKjH text-color--normal__373c0__K_MKN text-align--left__373c0__2pnx_').text()
//       })
//     })
//     return formattedData
//   } catch (err) {
//     console.log(err);
//   }
// }

// getRawHTML().then((data) => {
//   console.log('madeithere', data)
//   return data
// })

/////////////////////////
// const nightmare = Nightmare({ show: true })
// const url = 'https://news.ycombinator.com';

// nightmare
//   .goto(url)
//   .wait('body')
//   .evaluate(() => document.querySelector('body').innerHTML)
//   .end()
//   .then(response => {
//     console.log(getData(response));
//   }).catch(err => {
//     console.log(err);
//   });

// let getData = html => {
//   data = [];
//   const $ = cheerio.load(html);
//   $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
//     data.push({
//       title : $(elem).text(),
//       link : $(elem).find('a.storylink').attr('href')
//     });
//   });
//   return data;
// }
