var mongoose =require('mongoose');

const patientSchema = new mongoose.Schema(
    {
        name:String, 
        age:Number,
        userId:String,
        place:String
    }
);
const patientModel =mongoose.model('patient',patientSchema);
module.exports={patientModel}