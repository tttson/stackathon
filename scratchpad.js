// const sentiment = new Sentiment();
// const result = sentiment.analyze('Cats are stupid.');

// console.log('whats the number', result);

// reviews.forEach(function(comment) {
//   comment.sentiment = ml.classify(comment.body);
//   if (comment.sentiment >= 5) {
//     comment.emoji = "😃";
//   } else if (comment.sentiment > 0) {
//     comment.emoji = "🙂";
//   } else if (comment.sentiment == 0) {
//     comment.emoji = "😐";
//   } else {
//     comment.emoji = "😕";
//   }
// });


//below console.logs --- "Promise { <pending> }"
// async function getRawHTML () {
//   const response = await axios.get(url)
//   return response
// }
// let rawHTML = getRawHTML()
// console.log('doesthiswerk', rawHTML)

// node index.js to run code

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

//YELP
//business info aka ambience and noise level, etc
//'.short-def-list dl'

