const lobby = {
  games: [],
  players: []
}

function create () {
  const game = { name: 'first' }

  lobby.games.push(game)
}

create()

const report = JSON.stringify(lobby, null, 2)

console.log('report test:', report)
