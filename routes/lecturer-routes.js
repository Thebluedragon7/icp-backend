const express = require("express");
const router = express.Router();
const lecturerController = require("../controllers/lecturer-controller");

router.get("/", lecturerController.getLecturers);

router.post("/", lecturerController.addLecturers);

router.get("/:id", lecturerController.getLecturersById);

router.put("/:id", lecturerController.updateLecturerById);

router.delete("/:id", lecturerController.deleteLecturerById);

module.exports = router;
