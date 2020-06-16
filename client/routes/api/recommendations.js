const router = require("express").Router();
const recommendationsController = require("../../controller/recommendationsController");

// Matches with "/api/books"
router.route("/")  
  .get(recommendationsController.findAll)
  .post(recommendationsController.create);
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(recommendationsController.findById)
  .put(recommendationsController.update)
  .delete(recommendationsController.remove);

module.exports = router;