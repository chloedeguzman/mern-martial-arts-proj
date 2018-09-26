const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const martialArts = require('./server/routes/martialarts');
const signin = require('./server/routes/signin');
const signup = require('./server/routes/signup');
const signout = require('./server/routes/signout');


const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongodb
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Use Routes
app.use('/martialarts', martialArts);
app.use('/account', signin);
app.use('/account', signup);
app.use('/account', signout);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
