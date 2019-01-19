const games = [
  "league of legends",
  "gta",
  "counter strike",
  "eve online",
  "fifa 2019"
];

//normal
for (let i = 0; i < games.length; i++) {
  console.log(games[i]);
}

//es6 for each

games.forEach((game, index) => {
  console.log(`Game ${index+1}: ${game}`);
});
