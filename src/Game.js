import Round from '../src/Round'
import Player from './Player';
import domUpdates from './domUpdates';
// import FastMoney from './FastMoney';
class Game {
  constructor(name1, name2, randomStart, data) {
    this.players = this.newPlayers(name1, name2)
    this.currentRound = 1;
    this.round = new Round(1, randomStart, data)
  }

  newPlayers (name1, name2) {
    let bothPlayers = []
    let player1 = new Player(1, name1)
    let player2 = new Player(2, name2)
    bothPlayers.push(player1, player2)
    domUpdates.assignNames(player1.name, player2.name)
    return bothPlayers
  }

  newRound(currentPlayer, data) {
    this.currentRound++
    let that = this;
    if (this.currentRound < 5) {
      setTimeout(() => {
        domUpdates.showBoard(that.round)
      }, 2000);
      // this.autoRound(currentPlayer, data)
      return this.round = new Round(that.currentRound, currentPlayer, data)
    } else {
      setTimeout(() => {
        that.calculateWinner()
      }, 2000);
    }
  }

  // autoRound(currentPlayer, data) {
  //   if (this.currentRound >= 3) {
  //     setInterval(() => {
  //       this.newRound(currentPlayer, data)
  //     }, 70000);
  //   }
  // }

  calculateWinner() {
    let playerScore = this.players
      .map(player => {
        return {name: player.name, score: player.score}
      })
      .sort((a, b) => b.score - a.score)
      .shift()
    domUpdates.endGame(playerScore)
    return playerScore
  }
}

export default Game;