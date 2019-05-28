import chai from 'chai';
import Game from '../src/Game'
import Round from '../src/Round'
import spies from 'chai-spies'
import Player from '../src/Player'
import domUpdates from '../src/domUpdates'
import FastMoney from '../src/FastMoney';
const expect = chai.expect;
chai.use(spies)
// chai.spy.on(domUpdates, 'correctAnswer', () => true)
chai.spy.on(domUpdates, 'startTimer', () => true)
// chai.spy.on(domUpdates, 'showBoard', () => true)

describe('FastMoney', function () {

  let fastMoney;
  let round;
  let player1;
  let player2;
  beforeEach(function () {
    round =  new Round(2, 2, 2)
    fastMoney = new FastMoney(round.answers, round.currentPlayer)
    player1 = new Player(1, 'Patrick', 'Wrap It')
    player2 = new Player(2, 'Aidan', 'What up')
  })

  it('should be a function', function () {
    expect(FastMoney).to.be.a('function');
  });

  it('should instantiate FastMoney', function () {
    expect(fastMoney).to.be.an.instanceOf(FastMoney)
  })

  it('should have some props yo', function () {
    expect(fastMoney.answers)
  })

  it('should find the answers', function () {
    expect(fastMoney.answers).to.be.an('array').and.have.length(3)
    expect(fastMoney.answers[0].surveyId).to.equal(round.survey.id)
  })

  it('should start with this.currentPlayer, and this.guessed is empty', function () {
    expect(fastMoney.currentPlayer).to.be.a('number')
    expect(fastMoney.guessed).to.be.a('array')
  })

  it('should check the guess and increase the score if correct', function () {
    fastMoney.checkGuess(player1)
    expect(player1.score).to.equal(122)
    fastMoney.checkGuess(player2)
    expect(player2.score).to.equal(0)
  })

  it('should push the corrrect answer to the guessed array', function () {
    fastMoney.checkGuess(player1)
    expect(fastMoney.guessed).to.eql(['Wrap It'])
  })

  it('should have a timer', function () {
    expect(fastMoney.timer).to.be.a('function')
  })

});
