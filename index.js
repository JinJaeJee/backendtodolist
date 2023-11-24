import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const port = "3001";

let item1 = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/todos", (req, res) => {
  res.json(item1);
});

app.post();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
