const router = require("express").Router();
const meetupsController = require("../../controller/meetupController");

// Matches with "/api/books"
router.route("/")  
  .get(meetupsController.findAll)
  .post(meetupsController.create);
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(meetupsController.findById)
  .put(meetupsController.update)
  .delete(meetupsController.remove);

module.exports = router;