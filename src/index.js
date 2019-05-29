fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
  .then(response => response.json())
  .then(feudData => data = feudData.data)

var data;


import $ from 'jquery';
import './css/base.scss';
import './images/turing-logo.png'
import Game from './Game';
import domUpdates from './domUpdates';

$(document).ready(function () {
  $('#game-board').hide()
  $('header').hide()
})

let game;
$('#btn_game-start').on('click', function (e) {
  e.preventDefault()
  let randomNum = 1;
  let playerName1 = $('#input_name-player1').val()
  let playerName2 = $('#input_name-player2').val()
  if (playerName1 && playerName2) {
    game = new Game(playerName1, playerName2, randomNum, data)
    domUpdates.showBoard(game.round, 0)
  } else {
    alert('please enter a name')
  }
})

$('#btn_submit').on('click', function (e) {
  e.preventDefault()
  if (game.round.turn.currentPlayer === 1) {
    game.players[0].guess = $('#input_player-guess').val()
    turn.checkGuess(game.players[0])
  } else {
    game.players[1].guess = $('#input_player-guess').val()
    turn.checkGuess(game.players[1])
  }

  if (game.round.turn.guessed.length === 3) {
    let player = game.round.turn.currentPlayer;
    game.newRound(player, data);
  } 
})

$('#btn_game-quit, #btn_restart-game').on('click', function () {
  domUpdates.quitGame()
})

$('#rules').on('click', function (e) {
  e.preventDefault()
  domUpdates.showRules()
})

$('.close, .popup-overlay').on('click', function(e) {
  e.preventDefault()
  domUpdates.hideRules()
})