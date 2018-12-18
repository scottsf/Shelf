require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');
let ctr = require('./controller.js');
let app = express();

app.use(bodyParser.json());
massive(process.env.DB_URI).then(instance => {
  app.set('db', instance);
});

app.get('/api/inventory', ctr.read)
let PORT = 3001;
app.listen(PORT, () => console.log(`App is running on ${PORT}`));
