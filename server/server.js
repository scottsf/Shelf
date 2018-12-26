require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctr = require('./controller.js');
const app = express();
const monitor = require('pg-monitor');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

massive(process.env.DB_URI).then(instance => {
  monitor.attach(instance.driverConfig)
  console.log('Massive attack! ')
  app.set('db', instance);
});

app.get('/api/inventory', ctr.getAll);
app.post('/api/product', ctr.createProduct);
app.delete('/api/product/:id', ctr.removeProduct);
app.put('/api/product/:id', ctr.update);
app.get('/api/product/:id', ctr.getProduct);

const PORT = 3001;
app.listen(PORT, () => console.log(`App is running on ${PORT}`));
