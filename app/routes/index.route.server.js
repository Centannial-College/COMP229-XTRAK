import { Router } from "express";
import { displayAboutPage,
    displayHomePage } from "../controllers/index.controller.server.js";

const router = Router();

//Routes to home and about page
router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);

export default router;
