import express from "express";
import routes from "./routes";

export const app = express();

// calling all routes
routes(app);
