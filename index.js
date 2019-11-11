const lobby = {
  games: [],
  players: [] // All the players
}

function create (name) {
  const game = {
    name,
    players: [] // Players in this game

  }
  // const game = { "name": name }

  lobby.games.push(game)
}

function register (name) {
  lobby.players.push(name)
}

create('created')

register('david')

const report = JSON.stringify(lobby, null, 2)

console.log('report test:', report)
