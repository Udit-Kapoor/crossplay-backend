const {getAccessToken} = require("../connections/huddle");
const catchAsync = require("../util/catchAsync");
 
exports.huddleHandler = catchAsync(async (req, res, next) => {
  if (!req.query.huddleRoomId) {
    throw new Error("Id not found");
  }
  console.log("inside huddle handler");
  const huddleRoomId = req.query.huddleRoomId;
  const token = await getAccessToken(huddleRoomId);

  res.send({
    status: 200,
    message: "created token successfully",
    token : token
  });
});