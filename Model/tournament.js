const mongoose = require("mongoose");
const tournament = new mongoose.Schema(
  {
    name: String,
    description: String,
    type: String,
    game: String,
    date: Date,
    gameID: String,
    imgURL: String,
    competitors: Number,
    status: String,
    firstRound: {
      status: Boolean,
      matches: [
        {
          matchName: String,
          players: [String],
          winner: String,
          loser: String,
        },
      ],
    },
    secondRound: {
      status: Boolean,
      matches: [
        {
          matchId: {
            type: Number,
            default: 5,
          },
          matchName: String,
          players: [String],
          winner: String,
          loser: String,
        },
        {
          matchId: {
            type: Number,
            default: 6,
          },
          matchName: String,
          players: [String],
          winner: String,
          loser: String,
        },
      ],
    },
    champion: String,
    runnerUp: String,
    thirdPlace: String,
    thirdRound: {
      status: Boolean,
      matchId: {
        type: Number,
        default: 7,
      },
      matchName: String,
      players: [String],
      winner: String,
      loser: String,
    },
    final: {
      status: Boolean,
      matchId: {
        type: Number,
        default: 8,
      },
      matchName: String,
      players: [String],
      winner: String,
      loser: String,
    },
  },
  {}
);

const Tournament = mongoose.model("tournament", tournament);

module.exports = Tournament;
