// axios.get(url)
//   .then(response => {
//     let html = response.data;
//     console.log(getData(html));
//   })
//   .catch(error => {
//     console.log(error);
//   })

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

// const url = 'https://tinder.com/app/profile'

// axios.get(url)
//   .then(response => {
//     let html = response.data;
//     console.log(html)
//     // console.log(getData(html));
//   })
//   .catch(error => {
//     console.log(error);
//   })

// // let getData = html => {
// //   let data = {};
// //   const $ = cheerio.load(html);
//       data.title =
// //   return data;
// // }


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
