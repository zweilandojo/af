const dotenv = require('dotenv').load();
const path = require('path')
const express = require('express')

const bodyParser = require('body-parser')
const pino = require('express-pino-logger')()
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
  process.env.TWILIO_USERNAME
)

// Create the server
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(pino)

// Serve our api route /greeing that returns a custom Hello World
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
})

// Post our message through to Twilio which SMS' phone number
app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});


// Serve static files from the
// React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Anything that doesn't match the above,
// send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})


// Choose the port and start the server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})
