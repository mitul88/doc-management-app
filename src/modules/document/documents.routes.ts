import { Router } from "express";
import { getDocuments } from "./document.controller";

export const documentRouter = Router();

documentRouter.route("/").get(getDocuments);
