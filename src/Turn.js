import data from "../data";
import Round from "../src/Round";
import Player from '../src/Player';
import Game from '../src/Game';
import domUpdates from './domUpdates';

class Turn {
  constructor(answers, currentPlayer) {
    this.answers = answers;
    this.currentPlayer = currentPlayer;
    this.guessed = [];
  }

  checkGuess(player) {  
    let guessed = this.answers
      .map(steve => steve.answer)
      .indexOf(player.guess)
    if (this.guessed.includes(player.guess)) {
      domUpdates.checkGuess()
    } else if (guessed === -1) {
      this.switchPlayer()
    } else {
      this.increaseScore(player, this.answers[guessed], guessed)
    }
  }
  
  increaseScore (player, answer, index) {
    player.score += answer.respondents;
    this.guessed.push(`${this.answers[index].answer}`)
    domUpdates.correctAnswer(player.id, player.score, answer, index)
  }

  switchPlayer() {
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
    domUpdates.switchPlayer(this.currentPlayer)
  }

}

export default Turn;