console.clear()

const express  = require('express')
const cors     = require('cors')
const mongoose = require('mongoose')
// const router   = require('.router/router')

// let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/portfolio'
let URL_ATLAS = 'mongodb+srv://asierpl210395:brocoli21@cluster1.teysfs4.mongodb.net/portfolio'

const app = express()

const conectar = async () => await mongoose.connect(URL_ATLAS)
    .then  ( () => console.log('Conectado a la BBDD') )
    .catch ( error => console.log(error) )

conectar()


const headerNavSchema = new mongoose.Schema(
    {href : String , title : String},
    {collection : 'headerNav'}
)
const HeaderNav = mongoose.model('HeaderNav' , headerNavSchema)


app.get( '/' , async (req , res , next)=>{

    const headerNav = await HeaderNav.find()
    const datos = { headerNav  }
        
        // res.status(200).json(datos)
        res.json(JSON.stringify({URL_ATLAS}))
})



app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded( { extended : false } ) )
// app.use( router )

app.listen( 3000 , ()=> console.log('Iniciando API') )