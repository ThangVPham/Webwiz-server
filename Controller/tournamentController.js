const Tournament = require("../Model/tournament");

const getAllTournaments = async (req, res) => {
  try {
    let tournaments = await Tournament.find();

    res.send(tournaments);
  } catch (e) {
    console.log(e.message);
    res.status(400);
  }
};

const createNewTournament = async (req, res) => {
  try {
    const newTourney = req.body;
    await Tournament.create(newTourney);
    res.end();
  } catch (e) {
    console.log(e.message);
    res.status(400);
  }
};

const getTournamentById = async (req, res) => {
  try {
    const id = req.params.id;
    let tournament = await Tournament.findById(id);
    console.log(tournament);
    res.send(tournament);
  } catch (e) {
    console.log(e.message);
    res.status(400);
  }
};

const editTournamentById = async (req, res) => {
  try {
    let tournament = req.body;
    let id = req.params.id;
    await Tournament.updateOne({ _id: id }, tournament);
    res.end();
  } catch (e) {
    console.log(e.message);
    res.status(400);
  }
};

const deleteTournamentById = async (req, res) => {
  try {
    let id = req.params.id;
    let tournament = await Tournament.findById({ _id: id });

    await Tournament.deleteOne({ _id: id });
    console.log(`${tournament.name} tournament deleted.`);

    res.redirect("/");
  } catch (e) {
    console.log(e.message);
    res.status(400);
    res.json({ message: "400-Error" });
  }
};

module.exports = {
  getAllTournaments,
  createNewTournament,
  getTournamentById,
  editTournamentById,
  deleteTournamentById,
};
