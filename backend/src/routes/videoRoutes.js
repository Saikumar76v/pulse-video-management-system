const express = require("express");
const Video = require("../models/video");
const upload = require("../config/multer");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router(); // ✅ THIS WAS MISSING

// TEST ROUTE
router.get("/test", (req, res) => {
  res.send("VIDEO ROUTES WORKING");
});

// UPLOAD VIDEO
router.post(
  "/upload",
  authMiddleware,
  upload.single("video"),
  async (req, res) => {
    try {
      console.log("UPLOAD HIT");
      console.log("FILE:", req.file?.originalname);

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const video = new Video({
        filename: req.file.filename,
        originalName: req.file.originalname,
        uploadedBy: req.user.id,
      });

      await video.save();

      res.status(201).json({
        message: "Video uploaded successfully",
        video,
      });
    } catch (error) {
      console.error("UPLOAD ERROR:", error);
      res.status(500).json({ message: error.message });
    }
  }
);

// DELETE VIDEO
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    await video.deleteOne();
    res.json({ message: "Video deleted successfully" });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// GET ALL VIDEOS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const videos = await Video.find()
      .populate("uploadedBy", "email role")
      .sort({ createdAt: -1 });

    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
