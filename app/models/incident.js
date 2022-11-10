import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const incidentSchema = new Schema({
    recordNumber: String,
    description: String,
    priority: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: String, 
}, {
    timestamps: true,
    collection: 'incident'
});

export default mongoose.model('Incidents', incidentSchema);