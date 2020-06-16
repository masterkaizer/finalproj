const router = require("express").Router();
const recommendationRoutes = require("./recommendations");
const meetupRoutes = require("./API-meetup");
// const routers = require("express").Router();
// Rec routes
router.use("/recommendations", recommendationRoutes);
router.use("/meetups", meetupRoutes);
module.exports = router;
// module.exports = routers;
//when I uncomment line 9 it crashes
