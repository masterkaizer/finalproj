// // // Dependencies
// // // =============================================================
// var db = require('../models');
// // // Routes
// // // =============================================================
// module.exports = function(app) {


// //GET route for getting all the recommendations written

//   app.get('/api/recommendation',function(req,res) {
//     db.Recommendation.findAll({})
//       .then(function(dbRecommendation){
//         res.json('This is a new rec',dbRecommendation);
//       });
//   });

//   // POST route for saving a new recommendation
//   app.post('/api/recommendation', function(req, res) {
//     db.Recommendations.create(req.body).then(function(dbRecommendation) {
//       res.json(dbRecommendation);
//     });
//   });
// };