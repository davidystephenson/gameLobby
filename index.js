const lobby = {
  games: [],
  users: [], // All the players
  create (name) {
    const game = {
      name,
      players: [] // Players in this game

    }
    // const game = { "name": name }

    this.games.push(game)
  },
  join (gameName, name, password) {
    // const users = lobby.users
    const { users } = lobby

    const user = users.find(user => user.name === name)
    // return user that matches test
    // return first user that returns true
    console.log('user test:', user)

    const verified = user.verify(password)

    if (verified) {
      let gameToJoin

      this
        .games
        .forEach(game => {
          if (game.name === gameName) {
            gameToJoin = game
          }
        })

      const player = new Player(name, password)

      gameToJoin.players.push(player)

      return player
    }

    console.log('You are unverified')
  }
}

class User {
  constructor (name, password, age = 18) {
    age = age || 18

    this.name = name
    this.password = password
    if (age) {
      this.age = age
    } else {
      this.age = 18
    }
  }

  verify (password) {
    if (this.age < 18) {
      return false
    }

    return this.password === password
  }
}

class Player extends User {
  constructor (name, password) {
    super(name, password) // This is the constructor of the User class because Player extends User

    this.points = 0
  }

  gain (number) {
    this.points = this.points + number
  }

  lose (number) {
    this.points = this.points - number
  }

  reset () {
    this.points = 0
  }

  announce () {
    console.log(`${this.name} has ${this.points}`)
  }
}

function register (name, password, age) {
  const user = new User(name, password, age)

  this.users.push(user)

  return user
}

lobby.register = register

lobby.create('created')

const david = lobby.register('david', 'password', 75)
console.log('password test:', david.verify('password'))
console.log('wrong test:', david.verify('wrong'))

const player = lobby.join('created', 'david', 'password')
if (player) {
  player.gain(10)
  player.announce()
}

const report = JSON.stringify(lobby, null, 2)

console.log('report test:', report)
