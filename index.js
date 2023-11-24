import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());

const port = "3001";

let item1 = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/todos", (req, res) => {
  try {
    res.json(item1);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/add", async (req, res) => {
  try {
    const itemTitle = req.body.title;
    const newTodo = { id: Date.now(), title: itemTitle };
    item1.push(newTodo);
    res.json(newTodo);
  } catch (err) {
    console.error("Error:", err);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const idToDelete = parseInt(req.params.id);
    const indexToDelete = item1.findIndex((item) => item.id === idToDelete);
    if (indexToDelete !== -1) {
      item1.splice(indexToDelete, 1);
      res.json({
        message: "deleted",
      });
    }
  } catch (err) {
    console.error("Error:", err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
