const express = require('express');
const {home,createUser,getUser,deleteUser,editUser} = require('../controllers/userControllors')

const route = express.Router();

route.get('/',home)
route.post('/c',createUser)
route.get('/output',getUser)
route.put('/edit/:ide',editUser)
route.delete('/d/:id',deleteUser)

module.exports = route