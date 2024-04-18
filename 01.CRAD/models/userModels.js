const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name must be required'],
        trim:true,
        lowercase:true,
        maxlength:[20,'Name must be less then 20']
    },
    email:{
        type:String,
        required:[true,'Email must be required'],
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)
