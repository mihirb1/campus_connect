import express from "express";
import cors from "cors";
import db from "./lib/db";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.static("public"));
app.use(express.json());

app.get("/", async (req, res) => {
  const users = await db("users").select("*");
  res.status(200).json({ users });
});

app.post("/event", async (req, res) => {
  try {
    const [event] = await db("events").insert({
      ...req.body,
    }).returning("*");
    res.status(201).json({ event });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
