import $ from 'jquery'

const domUpdates = {
  checkGuess: function(player, guess) {
    let guessed = this.answers.map(steve => steve.answer).indexOf(player.guess)
    guessed === -1 
      ? this.switchPlayer()
      : this.increaseScore(player, this.answers[guessed], guessed);
  },
  updateScore: function(player) {
    $('#player-1').text(player.score);
  }
}

export default domUpdates