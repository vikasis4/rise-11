const express = require('express');
const cors = require('cors');
const connectToDb = require('./database');
const port = 4001;


///////////// DECLARE ROUTES /////////////////
const user_routes = require('./routes/user');
const notes_routes = require('./routes/notes');

///////////////// CONFIG ////////////////////
const app = express();
app.use(cors('*'));
connectToDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///////////////// ROUTES ////////////////////
app.use('/api/user', user_routes);
app.use('/api/notes', notes_routes);

app.listen(port, (err)=>{
    if (err) {
        console.log('SERVER CRASHED', err);
    }else{
        console.log('Listening on the PORT: ' + port);
    }
})