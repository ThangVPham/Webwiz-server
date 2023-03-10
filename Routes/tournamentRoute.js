const express = require("express");
const router = express.Router();
const {
  getAllTournaments,
  createNewTournament,
  getTournamentById,
  editTournamentById,
  deleteTournamentById,
} = require("../Controller/tournamentController");

router.get("/", getAllTournaments);
router.post("/new-tournaments", createNewTournament);
router.get("/tournaments/:id", getTournamentById);
router.put("/tournaments/:id", editTournamentById);
router.delete("/delete/:id", deleteTournamentById);

module.exports = router;
