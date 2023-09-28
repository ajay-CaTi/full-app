const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to Uncaught exception`);
  process.exit(1);
});

// config

dotenv.config({ path: "backend/config/config.env" });

// Connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server working on http://localhost:${process.env.PORT}`);
});

// console.log(youtube); // Uncaught error

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to UNHANDLED PROMISE REJECTION`);

  server.close(() => {
    process.exit(1);
  });
});
