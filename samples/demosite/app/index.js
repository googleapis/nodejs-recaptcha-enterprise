const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Register '.html' extension with The Mustache Express
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');

app.use('/static', express.static('static'));
app.use('/', router);

// app.get('/login', (req, res) => {
//     const context = {
//         project_id: process.env.GOOGLE_CLOUD_PROJECT,
//         site_key: process.env.SITE_KEY,
//     }

//     res.render('login', context);
// })

app.listen(port, () => {
  console.log(`Recaptcha demosite app listening on port ${port}`);
})