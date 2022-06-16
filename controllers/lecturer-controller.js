const Lecturer = require("../models/Lecturer");

const getLecturers = async (req, res, next) => {
  let lecturers = await Lecturer.find();
  if (!lecturers) {
    return res.status(404).json({
      message: "No Items Available!",
    });
  }
  res.status(200).json({ lecturers });
};

const addLecturers = async (req, res, next) => {
  let lecturers = new Lecturer({
    title: req.body.title,
    firstName: req.body.group,
    lastName: req.body.day,
    Modules: req.body.startTime,
  });

  lecturers = await lecturers.save();

  if (!lecturers) {
    return res.status(500).json({
      message: "Cannot Add the Item",
    });
    next();
  }

  res.status(201).json({ lecturers });
};

const getLecturerById = async (req, res, next) => {
  const lecturerID = req.params.id;

  let lecturer = await Lecturer.findById(lecturerID);
  if (!lecturer) {
    res.status(404).json({
      message: `No category with id: ${lecturerID} was found`,
    });
  }

  res.status(200).json({ lecturer });
};

const updateLecturerById = async (req, res, next) => {
  const lecturerID = req.params.id;

  let lecturer = await Lecturer.findByIdAndUpdate(lecturerID, {
    title: req.body.title,
    group: req.body.group,
    day: req.body.day,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    block: req.body.block,
    room: req.body.room,
    lecturer: req.body.lecturer,
  });

  lecturer = await lecturer.save();

  if (!lecturer) {
    res.status(500).json({
      message: "Cannot Save the Lecturer",
    });
  }

  res.status(200).json({ lecturer });
};

const deleteLecturerById = async (req, res, next) => {
  const lecturerID = req.params.id;

  let lecturer = await Lecturer.findByIdAndRemove(lecturerID);

  if (!lecturer) {
    res.status(404).json({
      message: "Cannot delet the Lecturer!",
    });
  }

  res.status(200).json({
    message: "Lecturer Deleted Successfully!",
  });
};

exports.getLecturers = getLecturers;
exports.addLecturers = addLecturers;
exports.getLecturersById = getLecturerById;
exports.updateLecturerById = updateLecturerById;
exports.deleteLecturerById = deleteLecturerById;
