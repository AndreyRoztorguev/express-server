// Import the express module
const express = require("express");
const app = express();

// Set the port to listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/time", (req, res) => {
  res.send(new Date().toISOString());
});

// Define a POST route
app.get("/data", async (req, res) => {
  try {
    // Fetch the data from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    // Convert the response to JSON
    const data = await response.json();

    // Log the data (optional)
    console.log(data);

    // Send the data as a JSON response
    res.json({ receivedData: data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
