const mongoose = require('mongoose')

var mongoURL = 'mongodb+srv://balancivil9133:admin@cluster0.gklsjyh.mongodb.net/mern-pizza'

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=>{
    console.log('Mongo Database Connected successfully')
})

db.on('error',()=>{
    console.log('Mongo Database not connected')
})

module.exports = mongoose