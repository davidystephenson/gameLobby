const lobby = {
  games: [],
  players: [], // All the players
  create (name) {
    const game = {
      name,
      players: [] // Players in this game

    }
    // const game = { "name": name }

    this.games.push(game)
  },
  join: (player, gameName) => {
    // const gameToJoin = lobby
    //   .games
    //   .find(game => {
    //     return game.name === gameName
    //   })

    console.log('this test:', this)

    let gameToJoin

    this
      .games
      .forEach(game => {
        if (game.name === gameName) {
          gameToJoin = game
        }
      })

    console.log('gameToJoin test:', gameToJoin)

    gameToJoin.players.push(player)
  }
}

function register (name) {
  this.players.push(name)
}

lobby.register = register

lobby.create('created')

lobby.register('david')

lobby.join('david', 'created')

const report = JSON.stringify(lobby, null, 2)

console.log('report test:', report)
