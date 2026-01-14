const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");

console.log("APP.JS LOADED");

const app = express();

/* 🔥 ENABLE CORS FOR REACT FRONTEND */
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

/* BODY PARSER */
app.use(express.json());

/* SERVE UPLOADED VIDEOS */
app.use("/uploads", express.static("uploads"));

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend running");
});

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);

module.exports = app;
