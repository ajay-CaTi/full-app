const express = require("express");
const errorMiddleware = require("./middleware/error");

const app = express();

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use(express.json());

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
