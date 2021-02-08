const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const config = require('./utils/config')

const app = express()

// Setup view engine as pug
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Add static serve for client page
app.use(express.static(path.join(__dirname, '../client/build-latest')))
app.use('/', require('./routes/MainRouter.js'))

// Send back to client side home if URL was not found
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build-latest/index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send(`
    <h2>Server Error ${err.status || 500}</h2>
    <pre><code>${err}</code></pre>
  `)
});

module.exports = app
