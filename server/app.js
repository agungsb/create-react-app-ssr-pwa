require('ignore-styles')
const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const csshook = require('css-modules-require-hook/preset') // import hook before routes

var babelrc = fs.readFileSync(path.resolve(__dirname, '..', '.babelrc'));
var config;

try {
  config = JSON.parse(babelrc);
  config.ignore = /\/(build|node_modules)\//;
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-register')(config);

// routes
const index = require('./routes/index')
const api = require('./routes/api')
const universalLoader = require('./universal')


const app = express()

// Support Gzip
app.use(compression())

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup logger
app.use(morgan('combined'))

app.use('/', index)

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.use('/api', api)

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader)

module.exports = app
