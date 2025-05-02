import express from "express";
import db from "./lib/db";
import cors from "cors";

// CORS (Cross-Origin Resource Sharing) allows server to receive 
// data from other ports/endpoints
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
    const users = await db("users").select("*");
    res.status(200).json({ users });
  });
app.get("/events", async (req, res) => {
    const events = await db("events").select("*");
    res.status(200).json({ events });
});
app.post("/events", async (req, res) => {
    try {
        console.log(req.body)
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

