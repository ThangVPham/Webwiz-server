const mongoose = require('mongoose');
const tournament = new mongoose.Schema({
        name: String,
        description: String,
        type: String,
        game: String,
        date: Date,
        competitors: Number,
        status: String,
        firstRound: {
          matches: [
            {
              matchName: String,
              players: [String],
              winner: String,
              loser: String
            }
          ]
        },
        secondRound: {
          matches: [
            {
              matchId: {
                type:Number,
                default:5
              },
              matchName: String,
              players: [String],
              winner: String,
              loser: String
            },
            {
              matchId: {
                type:Number,
                default:6
              },
              matchName: String,
              players: [String],
              winner: String,
              loser: String
            }
          ]
        },
        champion: String,
        runnerUp: String,
        thirdPlace: String,
        thirdRound: {
          matchId: {
            type:Number,
            default:7    
            },
          matchName: String,
          players: [String],
          winner: String,
          loser: String
        },
        final: {
          matchId: {
            type:Number,
            default:8
          },
          matchName: String,
          players: [String],
          winner: String,
          loser: String
        }
      
},{})

const Tournament = mongoose.model('tournament',tournament);

module.exports = Tournament;