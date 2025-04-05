import express from "express";

const app = express();
const PORT = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.send("Hello, Bun + Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
