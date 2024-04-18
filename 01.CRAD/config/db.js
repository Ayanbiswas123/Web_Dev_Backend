const mongoose = require('mongoose');
const connectoDB = async() => {
    mongoose.connect(process.env.MONGODB_URL)
    .then((resp) =>{
        console.log('Mongodb Connected succesfully');
        console.log(`Connected to DB : ${resp.connection.host}`);
    })
    .catch((e) =>{
        console.log("Error :" + e);
        process.exit(1);
    })
}

module.exports = connectoDB;