import { Router } from "express";
import { postemail } from "../controller/email.controller.js";

const router = Router()

router.post('/',postemail)

export default router