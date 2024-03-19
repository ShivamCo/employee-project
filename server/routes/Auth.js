import express from 'express';
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import 'dotenv/config'


import { EmployeeModel } from '../models/Employee.js';
import { UserModel } from '../models/User.js';


const router = express.Router()


router.post("/register", async (req, res) => {
    const { email, password } = req.body
    
    const hashedPassword = await bcrypt.hash(password, 8)

    const alreadyUser = await UserModel.findOne({ email })

    if (alreadyUser) {
        res.status(500).json('Already a User!')
    }

    if (!alreadyUser) {

        try {

            const newUser = await UserModel.create({
                email: email,
                password: hashedPassword,
                
            })

            res.status(200).json("Registered Successfully!")

        } catch (error) {

            res.status(500).json(error)
        }
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body


    const user = await UserModel.findOne({ email })

    if (!user) {
        res.status(500).json("User Not Found!")
    }


    if (user) {
        const matchPassword = await bcrypt.compare(password, user.password)

        if (matchPassword) {

            try {

                const token = jwt.sign({

                    email: user.email,
                    emp_id: user.emp_id,

                }, process.env.SECRET_KEY, { expiresIn: '1h' });

                res.header('token', token, { httpOnly: true })
                res.json(token);

            } catch (error) {

                res.status(500).json(error)
            }
        }

        if (!matchPassword) {
            res.status(500).json("Invalid Credentials!")
        }
    }

})



router.post("/verify", async (req, res) => {
    const token = req.headers.headers
    

    if (!token) {
        res.status(500).json("Invalid Token!")
    }

    if (token) {
        try {
            const decode = jwt.verify(token, process.env.SECRET_KEY)
            
            res.status(200).send(decode)

        } catch (error) {

            res.status(500).json(error)

        }
    }


})






export { router as Auth }