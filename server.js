const express       = require('express'),
      mongoose      = require('mongoose'),
      bodyParser    = require('body-parser'),
      passport      = require('passport'),
      keys          = require('./config/keys');

// Routes
const users     = require('./routes/api/users'),
      profile   = require('./routes/api/profile'),
      projects  = require('./routes/api/projects');

const app = express();

// App Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(keys.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/projects', projects);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));