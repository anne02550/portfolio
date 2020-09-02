const express = require('express');

const app = express();
const port = process.env.PORT || 3100;

app.use('/public', express.static('public'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/img', express.static('public/img'));
app.use('/fonts', express.static('public/fonts'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/portfolio', (req, res) => {
  res.sendFile(__dirname + '/public/html/portfolio.html');
});

app.get('/resume', (req, res) => {
  res.sendFile(__dirname + '/public/html/resume.html');
});

app.listen(port, () => {
  console.log(`company directory listening at http://localhost:${port}`)
});