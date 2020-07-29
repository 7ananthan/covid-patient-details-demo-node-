var mongoose =require('mongoose');

const testSchema = new mongoose.Schema(
    {
        userId:String, 
        testResults:Number,
        date:String,
        patientId:String,
        varifiedDoc:String
    }
);
const testModel =mongoose.model('test',testSchema);
module.exports={testModel}