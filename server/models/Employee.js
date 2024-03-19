import mongoose, {Schema} from "mongoose";

const EmployeeSchema = new Schema({
    
    emp_id : {
        type: Number, 
        required: true
    },
    name:{
        type: String, 
        required: true
    },
    dob:{
        type: Date, 
        required: true
    },
    role:{
        type: String, 
        required: true
    },

})

export const EmployeeModel = mongoose.model('EmployeeModel', EmployeeSchema);

