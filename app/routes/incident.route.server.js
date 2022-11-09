import { Router } from "express";

import { DisplayIncidentList, 
    DisplayIncidentAddPage, 
    ProcessIncidentAddPage, 
    ProcessIncidentEditPage, 
    DisplayIncidentEditPage} from "../controllers/incident.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

//list all incidents
router.get('/incident-list', DisplayIncidentList);

//add and processes the new database item 
router.get('/incident-add', AuthGuard,  DisplayIncidentAddPage);
router.post('/incident-add', AuthGuard, ProcessIncidentAddPage);

//edit database item and processes them
router.post('/incident-edit/:id', AuthGuard, ProcessIncidentEditPage);
router.get('/incident-edit/:id', AuthGuard, DisplayIncidentEditPage);

//deletes item from database
router.get('/incident-delete/:id', AuthGuard, ProcessIncidentEditPage);

export default router;