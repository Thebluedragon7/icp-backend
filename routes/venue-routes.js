const express = require("express");
const router = express.Router();
const venueController = require("../controllers/venue-controller");

router.get("/", venueController.getVenues);

router.post("/", venueController.addVenues);

router.get("/:id", venueController.getVenuesById);

router.put("/:id", venueController.updateVenueById);

router.delete("/:id", venueController.deleteVenueById);

module.exports = router;
