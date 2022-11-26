/*
File: incident.route.server.js
Date: 25.11.2022

NAME: xTrak - Incident Reporting
Description: xTrak is a web app platform to capture data for incident. The reports are saved and organized in a list. 

---- DEVELOPERS ----
Tim Upton – 301259058 
Pedro Da Silva Dergado – 301239283 
Alex Damovski – 301192233 
Tyler Mercier – STUDENT NUM 
Danill Velykyi - 301183618
Cathy Da - 301177731 
*/
import { Router } from "express";

import { DisplayIncidentList, 
    DisplayIncidentAddPage, 
    ProcessIncidentAddPage, 
    ProcessIncidentEditPage, 
    DisplayIncidentEditPage,
    DisplayIncidentViewPage,
    ProcessIncidentDelete} from "../controllers/incident.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

//list all incidents
router.get('/incident-list', AuthGuard, DisplayIncidentList);

//add and processes the new database item 
router.get('/incident-add', AuthGuard,  DisplayIncidentAddPage);
router.post('/incident-add', AuthGuard, ProcessIncidentAddPage);

//edit database item and processes them
router.post('/incident-edit/:id', AuthGuard, ProcessIncidentEditPage);
router.get('/incident-edit/:id', AuthGuard, DisplayIncidentEditPage);

//Display Incident Details page
router.get('/incident-view/:id', AuthGuard, DisplayIncidentViewPage);

//deletes item from database
router.get('/incident-delete/:id', AuthGuard, ProcessIncidentDelete);

export default router;