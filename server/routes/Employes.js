import express from 'express';
import { EmployeeModel } from '../models/Employee.js';

const router = express()

router.post("/employee-list", async (req, res) => {

    const {name} = req.body
    const regex = new RegExp(name, 'i');

    try {

        const userList = await EmployeeModel.find({name: regex})
        res.status(200).json(userList)


    } catch (error) {
        res.status(500).json("Employee Not Found")
    }


})


export { router as Employee }