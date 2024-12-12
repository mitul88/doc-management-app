import { Request, Response } from "express";

export const getDocuments = async (req: Request, res: Response) => {
  res.send("Hello from doc API. you will get dcocument lists from here");
};
