// Import the Express library we installed with npm
import express from "express";

// Create an Express application — this object IS our server
const app = express();

// The port (like a door number) our server listens on.
// We avoid 5000 because macOS uses it for AirPlay.
const PORT = 4000;

// Middleware: tells Express to automatically read JSON
// sent in request bodies (we'll need this from Day 3)
app.use(express.json());

// ROUTE 1: when someone visits "/" with a GET request...
// req = the incoming request, res = the response we send back
app.get("/", (req, res) => {
  // ...send back plain text
  res.send("Hello from the TaskFlow server!");
});

// ROUTE 2: a "health check" API endpoint that returns JSON
app.get("/api/health", (req, res) => {
  // res.json() converts a JS object to JSON and sends it
  res.json({
    status: "ok",                      // server is alive
    time: new Date().toISOString(),    // current time as text
  });
});

// Start the server and listen for requests on PORT.
// The arrow function runs once the server is ready.
app.listen(PORT, () => {
  // Template literal: backticks let us insert ${variables}
  console.log(`Server running at http://localhost:${PORT}`);
});