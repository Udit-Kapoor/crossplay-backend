const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    _id: { type: String },
    alias: { type: String, default: "" },
    isPublic: { type: Boolean, default: false },
    tokenData: {
      amount: { type: Number, default: 0 },
      betToken: { type: String, required: true },
      // betTokenId: { type: Number, required: true },
      betTokenType: { type: String, required: true },
      betTokenName: { type: String, required: true },
    },
    huddleRoomId: { type: String, default: "" },
    // assign when game starts
    me: { type: String, required: true },
    meChain: { type: String, required: true },
    opponent: { type: String },
    opponentChain: { type: String },

    // to know if they ended the game
    meFinished: { type: Boolean, default: false },
    opponentFinished: { type: Boolean, default: false },

    // input scores
    scoreMe: { type: Number, default: 0 },
    scoreOpponent: { type: Number, default: 0 },
    status: {
      type: String,
      default: "init",
      enum: ["init", "opponent-found", "ongoing", "complete", "refund"],
    },
    refundReason: { type: String },

    // winner details for this game
    winner: { type: String }, // wallet id of winner
    winnerChain: { type: String },
    winnerNft: { type: String }, // nft address of winner
  },
  { timestamps: true },
  { versionKey: false }
);

module.exports = mongoose.model("Game", gameSchema);
