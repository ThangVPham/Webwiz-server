const { getGameDetails } = require("../Utility/getGameInfo");
const searchGame = async (req, res) => {
  const game = req.body.name;

  let result;
  try {
    result = await getGameDetails(game);
  } catch (e) {
    console.log(e.message);
  }
  res.send(result);
};

module.exports = { searchGame };
