var mongoose =require('mongoose');

const patientSchema = new mongoose.Schema(
    {
        name:String, 
        age:Number,
        place:String
    }
);
const patientModel =mongoose.model('patients',patientSchema);
module.exports={patientModel}