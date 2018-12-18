require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');
let app = express();

let PORT = 3001;
app.listen(PORT, () => console.log(`App is running on ${PORT}`));
