const express = require("express"); const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


const users = require("./routes/api/users");
const quizzes = require("./routes/api/quizzes");
const prompts = require("./routes/api/prompts");

const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    
    

app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/api/users", users);
app.use("/api/quizzes", quizzes);
app.use("/api/prompts", prompts);


const port = process.env.PORT || 5000;

app.listen(port, () => {});



