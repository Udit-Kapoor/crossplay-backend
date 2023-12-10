const express = require("express");
const leaderboardController = require("./controllers/leaderboard");
const profileController = require("./controllers/profile");
const huddleController = require("./controllers/huddleController");
const router = express.Router();


router.get('/leaderboard', leaderboardController.leaderboard);
router.get('/profile', profileController.getMe);
router.post('/huddleAT' , huddleController.huddleHandler );

module.exports = router;