const express = require("express");
const router = express.Router();
const moduleController = require("../controllers/module-controller");

router.get("/", moduleController.getModules);

router.post("/", moduleController.addModules);

router.get("/:id", moduleController.getModulesById);

router.put("/:id", moduleController.updateModuleById);

router.delete("/:id", moduleController.deleteModuleById);

module.exports = router;
