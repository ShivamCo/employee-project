import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import cors from 'cors';
import bodyParser from 'body-parser';

import { Auth } from './routes/Auth.js';
import { Employee } from './routes/Employes.js';

const PORT = process.env.PORT || 5000;
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


mongoose.connect( process.env.MONGO_DB_URL );

app.use("/api", Auth)
app.use("/api", Employee )

app.listen(PORT, ()=>{
    console.log(`Server is Live on ${PORT}`)
})