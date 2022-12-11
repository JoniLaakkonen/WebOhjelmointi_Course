const express = require("express");

const tableControllers = require("../controllers/tableControllers");

const router = express.Router();

router
  .route("/")
  .get(tableControllers.getAllUrheilijat)
  .post(tableControllers.createNewUrheilija);

router
  .route("/:id")
  .get(tableControllers.getUrheilijaById)
  .put(tableControllers.updateUrheilijaById)
  .delete(tableControllers.deleteUrheilija);

module.exports = router;
