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
    let timer = 30;   
    let that = this 
    domUpdates.startTimer(timer, this.guessed)
    setTimeout(() => {
      super.switchPlayer()
      domUpdates.startTimer(timer, that.guessed)
    }, 30000);
  }

  switchPlayer() {
    return;
  }
}

export default FastMoney;