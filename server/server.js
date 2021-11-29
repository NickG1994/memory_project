import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

//initailize express app
const app = express()

//install maleware
app.use(cors())

//Config Port number
 const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})