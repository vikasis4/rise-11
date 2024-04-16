const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const URL = process.env.MONGOURL
mongoose.set("strictQuery", false);
const connectToDb = async () => {
    await mongoose.connect(URL).then(() => {
        console.log('Connected to Database successfully');
    }).catch((error) => {
        console.log('Failed to connect to Database : ' + error);
    })
}

module.exports = connectToDb