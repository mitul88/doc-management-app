import express from "express";

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Hello, ${process.env}`);
});