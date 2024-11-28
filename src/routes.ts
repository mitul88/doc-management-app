import { documentRouter } from "./modules/document/documents.routes";

export = (app: any) => {
  app.use("/api/document", documentRouter);
};
