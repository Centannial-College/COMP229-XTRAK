/*
File: profile.route.server.js
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
import {Router} from 'express';

import {displayProfilePage,
    processProfileDelete,
    processProfilePage} from '../controllers/profile.controller.server.js';
import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/profile/:id', AuthGuard, displayProfilePage);
router.post('/profile/:id', AuthGuard, processProfilePage);
router.get('/profile-delete/:id', AuthGuard, processProfileDelete);

export default router;