import { Router } from "express";
import { getDocuments } from "../controller/document.controller";

export const router = Router();

router.route("/").get(getDocuments);
