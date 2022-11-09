import incidentModel from "../../models/incident.js";

export function GetList(req, res, next){
    incidentModel.find((err, incidentCollection)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', incident: incidentCollection, user: req.user})
    });
}

export function Get(req, res, next){
    let id = req.params.id;

    incidentModel.findById(id, (err, incident) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', incident, user: req.user })
    });
}

export function Add(req, res, next){
    let newIncident = new incidentModel({
        ...req.body
    });

    incidentModel.create(newIncident, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', newIncident});
    })
}

export function Edit(req, res, next){
    let id = req.params.id;

    let updatedIncident = new incidentModel({
        "_id": id,
        ...req.body
    });

    incidentModel.updateOne({_id: id}, updatedIncident, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', updatedMovie });
    })
}

export function Delete(req, res, next){
    let id = req.params.id;

    incidentModel.remove({_id: id}, (err)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success'})
    })
} 