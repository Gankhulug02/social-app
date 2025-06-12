require("dotenv").config();

const express = require("express");
const connectDB = require("./db/connect");
const userRoutes = require("./routes/user-routes");
const { notFound, errorHandler } = require("./middlware/error-handler");

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
