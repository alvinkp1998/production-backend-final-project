const express = require("express");
const router = express.Router();
const userJWT = require("../../middlewares/jwt");
const uploadLink = require("./uploadController");

const multer = require("multer");

const storageImg = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const storageFile = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/docs");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const storageVideo = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/videos");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const filterImg = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const filterFile = (req, file, cb) => {
  if (
    file.mimetype === "application/vnd.ms-powerpoint" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadImg = multer({ storage: storageImg, fileFilter: filterImg });
const uploadFile = multer({ storage: storageFile, fileFilter: filterFile });
const uploadVideo = multer({ storage: storageVideo });

router.post(
  "/img",
  userJWT.checkJWT,
  uploadImg.single("img"),
  uploadLink.service
);
router.post(
  "/docs",
  userJWT.checkJWT,
  uploadFile.single("docs"),
  uploadLink.service
);
router.post(
  "/video",
  userJWT.checkJWT,
  uploadVideo.single("video"),
  uploadLink.service
);

module.exports = router;
