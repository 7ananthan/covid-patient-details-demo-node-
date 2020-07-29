var mongoose =require('mongoose');

const testSchema = new mongoose.Schema(
    {
        testResults:String,
        date:String,
        patientId:String,
        varifiedDoc:String
    }
);
const testModel =mongoose.model('test',testSchema);
module.exports={testModel}