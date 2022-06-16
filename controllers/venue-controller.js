const Venue = require("../models/Venue");

const getVenues = async (req, res, next) => {
  let venues = await Venue.find();
  if (!venues) {
    return res.status(404).json({
      message: "No Items Available!",
    });
  }
  res.status(200).json({ venues });
};

const addVenues = async (req, res, next) => {
  let venues = new Venue({
    title: req.body.title,
    group: req.body.group,
    day: req.body.day,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    block: req.body.block,
    room: req.body.room,
    lecturer: req.body.lecturer,
  });

  venues = await venues.save();

  if (!venues) {
    return res.status(500).json({
      message: "Cannot Add the Item",
    });
    next();
  }

  res.status(201).json({ venues });
};

const getVenueById = async (req, res, next) => {
  const venueID = req.params.id;

  let venue = await Venue.findById(venueID);
  if (!venue) {
    res.status(404).json({
      message: `No category with id: ${venueID} was found`,
    });
  }

  res.status(200).json({ venue });
};

const updateVenueById = async (req, res, next) => {
  const venueID = req.params.id;

  let venue = await Venue.findByIdAndUpdate(venueID, {
    title: req.body.title,
    group: req.body.group,
    day: req.body.day,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    block: req.body.block,
    room: req.body.room,
    lecturer: req.body.lecturer,
  });

  venue = await venue.save();

  if (!venue) {
    res.status(500).json({
      message: "Cannot Save the Venue",
    });
  }

  res.status(200).json({ venue });
};

const deleteVenueById = async (req, res, next) => {
  const venueID = req.params.id;

  let venue = await Venue.findByIdAndRemove(venueID);

  if (!venue) {
    res.status(404).json({
      message: "Cannot delet the Venue!",
    });
  }

  res.status(200).json({
    message: "Venue Deleted Successfully!",
  });
};

exports.getVenues = getVenues;
exports.addVenues = addVenues;
exports.getVenuesById = getVenueById;
exports.updateVenueById = updateVenueById;
exports.deleteVenueById = deleteVenueById;
