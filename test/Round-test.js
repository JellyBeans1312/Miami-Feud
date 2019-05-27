import chai from 'chai';
import Round from '../src/Round'
import data from '../data'
import spies from 'chai-spies'
import Turn from '../src/Turn'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;
chai.use(spies)
// chai.spy.on(domUpdates, 'displayWords', () => true)

describe('Round', function () {

  let round;

  beforeEach(function () {
    round = new Round(1, 1, 5)
  })

  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should instantiate Round', function () {
    expect(round).to.be.an.instanceOf(Round)
  })

  it('should have properties determined upon instantiation', function () {
    expect(round.survey).to.be.an('object')
    expect(round.survey).to.eql({
      id: 5,
      question:
        'Other Than Movie Tickets, Name Something A Crowded Movie Theatre Might Run Out Of.'
    })
    expect(round.currentRound).to.equal(1)
    expect(round.currentPlayer).to.equal(1)
    expect(round.turn).to.be.an.instanceOf(Turn)
  })

  it('should pull a random survey', function () {
    expect(round.pullSurveys(round.randomNum)).to.be.a('object').and.eql(round.survey)
    expect(round.survey.id).to.equal(round.turn.answers[0].surveyId)
  })

  it('should remove the survey out of the data after it pulls ', function () {
    expect(data.surveys[4].id).to.equal(5)
    
    round.removeSurvey()
    
    expect(data.surveys).to.have.length(14)
    expect(data.surveys[4].id).to.equal(6)
    
    let round2 = new Round(1, 1, 3)
    
    expect(data.surveys[2].id).to.equal(3)
    
    round2.removeSurvey()
    
    expect(data.surveys[2].id).to.equal(4)
    expect(data.surveys).to.have.length(13)
  })

});