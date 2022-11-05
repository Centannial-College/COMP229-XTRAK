import {Request, Response} from 'express';
import Incident from 'src/models/incident';


// GET - returns a list of all incidents
export let incidentList = (req: Request, res: Response)=>{
    let incident = Incident.find((err: any, Incident: any) =>{
        if (err){
            res.send(err)
        } else {
            res.send(incident);
        }
    }) 
}


//get incident by id in database
export let getIncident = (req: Request, res: Response)=>{
    Incident.findById(req.params.id, (err: any, incident: any) =>{
        if (err){
            res.send(err)
        } else {
            res.send(incident);
        }
    })
}

// adds new incident in database
export let addIncident = (req: Request, res: Response) =>{
    let incident = new Incident(req.body);

    incident.save((err: any)=>{
        if (err){
            res.send(err)
        } else {
            res.send(incident);
        }
    })
}

//delete the current Incident 
export let deleteIncident = (req: Request, res: Response)=>{
    Incident.deleteOne({_id: req.params.id}, (err: any)=>{
        let dateTime = new Date();
        if (err){
            res.send(err)
        } else {
            res.send("Successfully Deleted the Incident" + "TIME: " + dateTime);
        }
    })
}

//update the exisitng incident
export let updateIncident = (req: Request, res: Response) =>{
    Incident.findByIdAndUpdate(req.params.id, req.body, (err: any, incident: any)=>{
        let dateTime = new Date();
        if (err){
            res.send(err)
        } else {
            res.send("Successfully updated Incident" + "TIME: " + dateTime);
        }
    })
}
