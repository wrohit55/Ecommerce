const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")


// Handling Uncaught Exceptation
process.on("uncaughtException", (err) => {
    console.log(`err: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})


// config

dotenv.config({ path: "backend/config/config.env" });

// Connecting to Database 
connectDatabase()

const server = app.listen(process.env.PORT, () => {

    console.log(`Server is working on http://loicalhost:${process.env.PORT}`)
})


// Unhandelled promise Rejection 

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});