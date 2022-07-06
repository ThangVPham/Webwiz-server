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
              loser: String,
              status:Boolean
            },
            {
              matchId: {
                type:Number,
                default:6
              },
              matchName: String,
              players: [String],
              winner: String,
              loser: String,
              status:Boolean
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
          loser: String,
          status:Boolean
        },
        final: {
          matchId: {
            type:Number,
            default:8
          },
          matchName: String,
          players: [String],
          winner: String,
          loser: String,
          status:Boolean
        }
      
},{})

const Tournament = mongoose.model('tournament',tournament);

module.exports = Tournament;