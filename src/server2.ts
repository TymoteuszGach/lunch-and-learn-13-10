const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/non-blocking/", (req: any, res: any) => {
  res.status(200).send("This page is non-blocking");
});

async function calculateCount(): Promise<number> {
  return new Promise((resolve, reject) => {
    let counter = 0;
    for (let i = 0; i < 20_000_000_000; i++) {
      counter++;
    }
    resolve(counter);
  });
}

app.get("/blocking", async (req: any, res: any) => {
  const counter = await calculateCount();
  res.status(200).send(`result is ${counter}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export {};