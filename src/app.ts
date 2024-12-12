import express from "express";
import routes from "./routes";
import middleware from "./middleware";

export const app = express();

// calling all routes
routes(app);

// calling all middleware
middleware(app);
