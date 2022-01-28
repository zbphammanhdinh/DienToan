import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import posts from './routers/posts.js'
//import mysql from 'mysql'
import mongoose from 'mongoose'

//const mysqlRDS = mysql

const app = express()
const POST = process.env.POST || 8000

const URI = 'mongodb+srv://ITCUN:11223344@cluster0.fvxdr.mongodb.net/momo?retryWrites=true&w=majority'

/*const con = mysqlRDS.createConnection({
    host:"database-1.cae9jc42afkh.us-east-2.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"11223344",
    database:"my_db"
})*/

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

app.use('/post', posts)

mongoose.connect(URI)
    .then(() => {
        console.log('Connected to DB')
        app.listen(POST, () => {
            console.log('server is running on ' + POST)
        })
    }).catch(err => {
        console.log('err', err)
    })
    /*con.connect(err=>{
        if(err){
            console.log(err.message)
            return
        }else{
            console.log("Database connected.")
            app.listen(POST, ()=>{
            console.log('server is running on '+POST)
            })
        }
    })*/