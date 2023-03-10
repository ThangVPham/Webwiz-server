const dotenv = require("dotenv");
dotenv.config();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function getGameID(name) {
  console.log(process.env.AUTH);
  return fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": `${process.env.CLIENT_ID}`,
      Authorization: `${process.env.AUTH}`,
    },
    body: `fields name; search "${name}"; limit 12;`,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.length) {
        return data;
      } else {
        return (data = { id: "Not Found", name: "Not Found" });
      }
    })
    .catch((e) => console.log(e.message));
}

async function getGameCoverURL(id) {
  return fetch("https://api.igdb.com/v4/covers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": `${process.env.CLIENT_ID}`,
      Authorization: `${process.env.AUTH}`,
    },
    body: `fields url; where game=${id};`,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        return `https:${data[0].url}`;
      } else {
        return (data.url = "Cover Not Found");
      }
    })
    .catch((e) => console.log(e.message));
}

async function getGameDetails(game) {
  const gameArray = await getGameID(game); //array of games with 'game' title
  if (!gameArray.length) {
    return gameArray;
  }
  const id = gameArray.map((game) => game.id);

  return Promise.all(
    gameArray.map(async (item) => {
      return {
        id: item.id,
        name: item.name,
        coverURL: await getGameCoverURL(item.id),
      };
    })
  );
}

module.exports = {
  getGameID,
  getGameCoverURL,
  getGameDetails,
};
