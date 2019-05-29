import chai from 'chai';
import Game from '../src/Game'
import Round from '../src/Round'
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import data from '../data'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'endGame', () => true)
chai.spy.on(domUpdates, 'assignNames', () => true)
chai.spy.on(domUpdates, 'showBoard', () => true)

describe('Game', function () {

  let game;
  beforeEach(function () {
    game = new Game('Aidan', 'Patrick', 1,  data)
  })

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should instantiate Game', function () {
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should instantiate a new Round', function () {
    expect(game.round).to.be.an.instanceOf(Round)
  })

  it('should instantiate 2 players', function () {
    expect(game.players).to.be.an('array')
    expect(game.players).to.be.eql([
      { id: 1, name: 'Aidan', score: 0, guess: undefined }, 
      { id: 2, name: 'Patrick', score: 0, guess: undefined }])
  })

  it('should determine the winner at the end of the round', function () {
    game.players[0].score = 150;
    game.players[1].score = 171;
    expect(game.calculateWinner(game.players)).to.eql({ name: 'Patrick', score: 171 })
  })

});