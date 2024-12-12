import { router as documentRouter } from "./document.routes";

export = (app: any) => {
  app.use("/api/document", documentRouter);
};
