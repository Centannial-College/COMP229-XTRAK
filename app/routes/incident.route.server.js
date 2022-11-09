import { Router } from "express";

import { DisplayIncidentList, 
    DisplayIncidentAddPage, 
    ProcessIncidentAddPage, 
    ProcessIncidentEditPage, 
    DisplayIncidentEditPage} from "../controllers/incident.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/incident-list', DisplayIncidentList);
router.get('/incident-add', AuthGuard,  DisplayIncidentAddPage);
router.post('/incident-add', AuthGuard, ProcessIncidentAddPage);
router.post('/incident-edit/:id', AuthGuard, ProcessIncidentEditPage);
router.get('/incident-edit/:id', AuthGuard, DisplayIncidentEditPage);
router.get('/incident-delete/:id', AuthGuard, ProcessIncidentEditPage);

export default router;