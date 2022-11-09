import { Router } from "express";
import { displayAboutPage,
    displayHomePage } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);

export default router;
