const Module = require("../models/Module");

const getModules = async (req, res, next) => {
  let modules = await Module.find();
  if (!modules) {
    return res.status(404).json({
      message: "No Items Available!",
    });
  }
  res.status(200).json({ modules });
};

const addModules = async (req, res, next) => {
  let modules = new Module({
    title: req.body.title,
    group: req.body.group,
    day: req.body.day,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    block: req.body.block,
    room: req.body.room,
    lecturer: req.body.lecturer,
  });

  modules = await modules.save();

  if (!modules) {
    return res.status(500).json({
      message: "Cannot Add the Item",
    });
    next();
  }

  res.status(201).json({ modules });
};

const getModuleById = async (req, res, next) => {
  const moduleID = req.params.id;

  let module = await Module.findById(moduleID);
  if (!module) {
    res.status(404).json({
      message: `No category with id: ${moduleID} was found`,
    });
  }

  res.status(200).json({ module });
};

const updateModuleById = async (req, res, next) => {
  const moduleID = req.params.id;

  let module = await Module.findByIdAndUpdate(moduleID, {
    title: req.body.title,
    group: req.body.group,
    day: req.body.day,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    block: req.body.block,
    room: req.body.room,
    lecturer: req.body.lecturer,
  });

  module = await module.save();

  if (!module) {
    res.status(500).json({
      message: "Cannot Save the Module",
    });
  }

  res.status(200).json({ module });
};

const deleteModuleById = async (req, res, next) => {
  const moduleID = req.params.id;

  let module = await Module.findByIdAndRemove(moduleID);

  if (!module) {
    res.status(404).json({
      message: "Cannot delet the Module!",
    });
  }

  res.status(200).json({
    message: "Module Deleted Successfully!",
  });
};

exports.getModules = getModules;
exports.addModules = addModules;
exports.getModulesById = getModuleById;
exports.updateModuleById = updateModuleById;
exports.deleteModuleById = deleteModuleById;
