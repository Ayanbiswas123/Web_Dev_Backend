const User = require('../models/userModels.js')

exports.home = (req, res) => {
    res.send(`<h1>hello world</h1>`)
}

exports.createUser = async (req, res) => {
    //extract info from frontend

    try {
        const { name, email } = req.body;

        if (!name || !email) {
            throw new Error("Name and Email required");
        }
        const userExist = User.findOne({ email: email })

        if (userExist) {
            throw new Error("User Already exist");
        }

        const resule = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
            message: 'User created succesfully',
            resule
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: 'User created Unsuccesfully'
        })
    }

}

//all data display

exports.getUser = async (req, res) => {
    try {
        const usersData = await User.find({})
        res.status(201).json({
            success: true,
            message: 'User Exist',
            usersData
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//Deleted a data from database

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const deleteData = await User.findByIdAndDelete(userId)
        res.status(200).json({

            success: true,
            message: `userId : ${deleteData} Delete Succesfully`
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: `userId : ${deleteData} Not Exist`
        })
    }
}

exports.editUser = async (req, res) => {
    try {
        const oldData = req.params.ide
        const newData = await User.findByIdAndUpdate(oldData,req.body)
        res.status(200).json({

            success: true,
            message: `userName delete`
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: `userId : ${deleteData} Not Exist`
        })
    }
}