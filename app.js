require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Tournament = require("./Model/tournament");
const cors = require("cors");
const { getGameDetails } = require("./Utility/getGameInfo");
const tournamentRoutes = require("./Routes/tournamentRoute");
const searchGameRoutes = require("./Routes/searchGameRoute");
const DB_URI =
  "mongodb+srv://ThangPham:PasswordThangPham@webwiz.jz3o0.mongodb.net/Tournament?retryWrites=true&w=majority";

const PORT = 5000;

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Remote DB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
app.use(cors());
app.use(bodyParser.json());
app.use(tournamentRoutes);
app.use(searchGameRoutes);

// app.post("/addplayers/:id", async (req, res) => {
//   let id = req.params.id;
//   let updatedTourney = req.body;
//   console.log("adding players");
//   await Tournament.updateOne({ _id: id }, updatedTourney);
//   console.log("added players");
//   res.redirect(`/tournaments/${id}`);
// });
// app.get("/addplayers/:id", async (req, res) => {
//   let tournament = await Tournament.findById({ _id: req.params.id });
//   res.send(tournament);
// });
