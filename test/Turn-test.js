import chai from 'chai';
import Turn from '../src/Turn';
import Round from '../src/Round';
import Player from '../src/Player'
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import Game from '../src/Game';
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'switchPlayer', () => true)
chai.spy.on(domUpdates, 'correctAnswer', () => true)

describe('Turn', function () {
  let round;
  let turn;
  let player1;
  let player2;
  beforeEach(function () {
    round = new Round(2, 2, 2)
    turn = new Turn(round.answers, round.currentPlayer)
    player1 = new Player(1, 'Patrick', 'Wrap It')
    player2 = new Player(2, 'Aidan', 'What up')
  })

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate Turn', function () {
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should find the answers', function () {
    expect(turn.answers).to.be.an('array').and.have.length(3)
    expect(turn.answers[0].surveyId).to.equal(round.survey.id)
  })

  it('should start with this.currentPlayer = 1, and this.guessed is empty', function () {
    expect(turn.currentPlayer).to.equal(round.currentPlayer)
    expect(turn.guessed).to.be.a('array')
  })

  it('should check the guess and increase the score if correct', function() {
    turn.checkGuess(player1)
    expect(player1.score).to.equal(61)
    turn.checkGuess(player2)
    expect(player2.score).to.equal(0)
  })

  it('should check the guess, and switch the player if incorrect', function () {
    expect(turn.currentPlayer).to.equal(2)
    turn.checkGuess(player2)
    expect(turn.currentPlayer).to.equal(1)
    turn.checkGuess(player2)
    expect(turn.currentPlayer).to.equal(2)
  })

  it('should push the corrrect answer to the guessed array', function () {
    turn.checkGuess(player1)
    expect(turn.guessed).to.eql(['Wrap It'])
  })

  

});