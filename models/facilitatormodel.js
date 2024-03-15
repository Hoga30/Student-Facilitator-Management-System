import mongoose from "mongoose";
const facilitatorSchema = new mongoose.Schema({
    fullName:{type:String,required:true},

    email:{
        type:String,required:true,unique:true},

    phoneNumber:{type:String,required:true, unique:true},

    nationalId:{
        type:String, required:true,unique:true},

    gender:{type:String,required:true,
        enum:{
            values:['Male', 'Female']
        }
    }
},{timestamp:true})

const facilitatorModel = mongoose.model('facilitator',facilitatorSchema)
export default facilitatorModel