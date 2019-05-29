/* eslint-disable object-shorthand */
import $ from 'jquery'

const domUpdates = {

  showBoard: function (roundObj) {
    $('header').show()
    $('#form_game-start').hide()
    $('.timer').hide()
    $('#game-board').show()
    $('#round_current-round').text(`Round ${roundObj.currentRound++}`)
    $('#survey_output').text(roundObj.survey.question)
    this.hideAnswers()
    $('input').val('')
  },

  switchRound() {
    let round = $('#round_current-round span').text();
    let parsed = parseInt(round);
    let increm = parsed++;
    return $('#round_current-round span').text(increm)
  },

  endGame(winner) {
    $('#game-board').hide()
    $('#form_game-start').hide()
    $('header').hide()
    $('.game-over').show()
    $('.game-over').text(`Game Over, ${winner.name} won with a score of ${winner.score}!!!`)
    $('#btn_restart-game').show()
  },

  assignNames: function (name1, name2) {
    $("#name_player-1").text(name1)
    $("#name_player-2").text(name2)
  },

  checkGuess: function () {
    $('#input_player-guess').val('That\'s already been guessed')
  },

  correctAnswer: function (player, score, answerObj, num) {
    $(`#score_player-${player}`).text(score)
    $(`.survey-box-${num}`).html(`<div class="turn_answer-container"><p class="turn_answer-${num}">${answerObj.answer}</p> <p class="turn_answer-respondents-${num}">${answerObj.respondents}</p></div>`)
    $('input').val('')
  },

  switchPlayer: function (userID) {
    let next = userID === 1 ? userID++ : userID--;
    $(`.p${next}`).toggleClass('neon-player-box')
    $(`.p${userID}`).toggleClass('neon-player-box')
    $('input').val('')
  },

  hideAnswers: function () {
    $('.turn_answer-0').text('Answer')
    $('.turn_answer-1').text('Answer')
    $('.turn_answer-2').text('Answer')
    $('.turn_answer-respondents-0').text('')
    $('.turn_answer-respondents-1').text('')
    $('.turn_answer-respondents-2').text('')
  },

  quitGame: function () {
    $('#form_game-start').show()
    $('#game-board').hide()
    $('header').hide()
    $('.game-over').hide()
    $('#btn_restart-game').hide()
    $(`#score_player-1`).text('0')
    $(`#score_player-2`).text('0')
  },

  startTimer: function (timer, guessed) {
    let interval = setInterval(() => {
      timer--;
      $('#round_current-round').text(`Fast Money ${timer}`)
      if (timer <= 0 || guessed.length === 3) {
        clearInterval(interval)
      }
      // if (this.switchPlayer()) {
      //   console.log('ima dummy');
        
      //   clearInterval(interval)
      // }
    }, 1000);
  },

  showRules: function () {
    $(".popup-overlay, .popup-content").addClass("active");
  },

  hideRules: function () {
    $(".popup-overlay, .popup-content").removeClass("active");
  }

}

export default domUpdates