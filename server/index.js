// const express = require('express')
// const path = require('path')
// const morgan = require('morgan')
// const bodyParser = require('body-parser')
// // const {db, Contact} = require('./db')
// const app = express()
// const request = require('request')
// const PORT = 3000

// // Logging middleware
// app.use(morgan('dev'))

// // Body parsing middleware
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

// // Static middleware
// app.use(express.static(path.join(__dirname, '..', 'public')))

// // API routes
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// // app.get('/jokes/random', (req, res) => {
// //   request(
// //     { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
// //     (error, response, body) => {
// //       if (error || response.statusCode !== 200) {
// //         return res.status(500).json({ type: 'error', message: err.message });
// //       }
// //       res.json(JSON.parse(body));
// //     }
// //   )
// // });

// // For all GET requests that aren't to an API route,
// // send the index.html
// app.get('/*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '..', 'index.html'))
// })

// // Handle 404s
// app.use((req, res, next) => {
//   const err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })

// // Error handling endware
// app.use((err, req, res, next) => {
//   res.status(err.status || 500)
//   res.send(err.message || 'Internal server error')
// })


//     app.listen(PORT, () => console.log(`

//       Listening on port ${PORT}
//       http://localhost:3000/

//     `))
