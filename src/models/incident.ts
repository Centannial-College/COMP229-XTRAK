import * as mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, (err: any) =>{
    if (err){
        console.log(err.message);
    } else{
        console.log("Connected to MongoDB");
    }
});


export const incidentSchema = new mongoose.Schema({
    description: {type: String, required: true},
    priority: {type: String, required: true },
    name: {type: String, required: true},
    email: {type: String, required: true},
    narrative: {type: String, required: true}
})

const Incident = mongoose.model('Incident', incidentSchema);

export default Incident;