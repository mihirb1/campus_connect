import express from "express";
import db from "./lib/db";
import cors from "cors";

// CORS (Cross-Origin Resource Sharing) allows server to receive 
// data from other ports/endpoints
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// gets data from database and puts it on route (backend)
app.use(cors({origin: "*", methods: "*"}));
app.use(express.json());
app.get("/", async (req, res) => {
    const users = await db("users").select("*");
    res.status(200).json({ users });
  });
app.get("/events", async (req, res) => {
    const events = await db("events").select("*");
    res.status(200).json({ events });
});

app.get("/test", async (req, res) => {
    const obj = {test: "this is a test"}
    res.status(200).json({ obj });
});
// puts events sent from frontend to backend into database
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

app.get("/users", async (req, res) => {
  const users = await db("users").select("*");
  res.status(200).json({ users }); // ✅ fixed
});


app.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    const [user] = await db("users")
      .insert({ ...req.body })
      .returning("*");
      console.log(user)


    res.status(201).json({ user }); // ✅ FIXED
  } catch (error) {
    console.log(error)
    res.status(500).json({ error });
  }
});

    

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

