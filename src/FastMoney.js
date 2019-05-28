// import data from "../data";
// import Round from "../src/Round";
// import Player from '../src/Player';
// import Game from '../src/Game';
import Turn from './Turn';
import domUpdates from './domUpdates';

class FastMoney extends Turn {
  constructor(answers, currentPlayer, guessed) {
    super(answers, currentPlayer, guessed)
    this.timeLeft = this.timer();
  }

  checkGuess(player) {
    super.checkGuess(player)
  }

  increaseScore(player, answer, index) {
    player.score += (answer.respondents * 2);
    this.guessed.push(`${this.answers[index].answer}`)
    domUpdates.correctAnswer(player.id, player.score, answer, index)
  }

  timer() {
    let superThat = super.switchPlayer()
    var timer = 30;
    var interval = setInterval(function () {
      timer--;
      domUpdates.startTimer(timer)
      if (timer === 0) {
        clearInterval(interval)
        superThat
      }
    }, 1000);
  }

  switchPlayer() {
    return;
  }
}

export default FastMoney;